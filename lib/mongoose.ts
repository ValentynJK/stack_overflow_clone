import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true); // to prevent unknown field queries
  const mongoURL = process.env.MONGODB_URL;

  // check for the error when url is not in environment variables
  if (!mongoURL) {
    return console.log(
      "Error: there is no MongoDB url available, please check environment variables"
    );
  }

  // check when base is already connected
  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  // connection block
  try {
    await mongoose.connect(mongoURL, {
      dbName: "devOverflow",
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
