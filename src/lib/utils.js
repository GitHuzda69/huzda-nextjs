import mongoose from "mongoose";

export async function connectDb() {
  const URL = process.env.MONGO_URL;
  try {
    mongoose.connect(URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
