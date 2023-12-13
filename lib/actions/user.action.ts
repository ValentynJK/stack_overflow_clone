"use server";

import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";
import {
  CreateUserParams,
  DeleteUserParams,
  GetAllUsersParams,
  UpdateUserParams,
  // GetAllUsersParams,
} from "./shared.type";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    await connectToDatabase();

    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(userData: UpdateUserParams) {
  try {
    await connectToDatabase();

    const { clerkId, updateData, path } = userData;
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(userData: DeleteUserParams) {
  try {
    await connectToDatabase();

    const { clerkId } = userData;
    const user = await User.findOne({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }
    // TODO: implement deletion of all user related data (questions, answers, comments, etc.)

    // gets ids for all user's questions
    const userQuestions = await Question.find({ author: user._id }).distinct(
      "_id"
    );

    console.log(userQuestions);

    await Question.deleteMany({ author: user._id });

    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllUsers(params: GetAllUsersParams) {
  try {
    connectToDatabase();

    // const { page = 1, pageSize = 20, filter, searchQuery } = params;

    const users = await User.find({}).sort({ createdAt: -1 });

    return { users };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
