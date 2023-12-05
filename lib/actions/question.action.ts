"use server";

import Question from "@/database/question.model";
import Tag from "@/database/tad.model";
import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetQuestionsParams, CreateQuestionParams } from "./shared.type";
import { revalidatePath } from "next/cache";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    await connectToDatabase();

    const questions = await Question.find({})
      .populate({
        path: "tags",
        model: Tag,
      })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    await connectToDatabase();

    const { title, content, tags, author, path } = params;

    // creates initial question with given params
    const question = await Question.create({
      title,
      content,
      author,
    });

    // initial array object for tags
    const tagDocuments = [];

    // searches and updates/creates tag with the given question id
    // pushes every tag id to tagDocuments
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    // searches for question object by id and updates it with array of tags ids
    await Question.findOneAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // TODO: Explore a bit about this method
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
