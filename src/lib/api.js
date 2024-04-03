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

export const getPostAdmin = async (posts) => {
  const ITEM_PER_PAGE = 5;
  try {
    connectDb();
    const post = await Post.find()
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (posts - 1));
    const count = await Post.find().count();
    return { count, post };
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

export const getUser = async (userId) => {
  try {
    connectDb();
    const users = await User.findById(userId.userId);
    console.log(users);
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
