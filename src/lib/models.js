import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    displayname: {
      type: String,
      required: true,
      min: 3,
    },
    email: {
      type: String,
      min: 3,
    },
    password: {
      type: String,
      min: 3,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 3,
    },
    desc: {
      type: String,
      required: true,
      min: 3,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
