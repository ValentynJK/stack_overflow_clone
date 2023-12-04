"use server";

import Question from "@/database/question.model";
import Tag from "@/database/tad.model";
import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    await connectToDatabase();

    const {
      title,
      content,
      tags,
      author,
      // path
    } = params;

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
  } catch (error) {
    console.log(error);
  }
}
