import { Post, User } from "./models";
import { connectDb } from "./utils";

export const getPosts = async () => {
  try {
    connectDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch all post!");
  }
};

export const getPost = async (slug) => {
  try {
    connectDb();
    const posts = await Post.findById(slug);
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  try {
    connectDb();
    const users = await User.findById(id.userId);
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUserName = async (id) => {
  try {
    connectDb();
    const users = await User.findById(id.userId);
    return users.displayname;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
