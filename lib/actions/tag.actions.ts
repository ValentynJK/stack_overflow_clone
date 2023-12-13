import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.type";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // Find interactions for the user and group by tags...
    // Interaction...

    return [
      { _id: "1", name: "NextJS" },
      { _id: "2", name: "React" },
      { _id: "3", name: "JS" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
