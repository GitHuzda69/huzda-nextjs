"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectDb } from "./utils";

export const addPost = async (formData) => {
  const { displayname, title, desc, img } = Object.fromEntries(formData);

  try {
    connectDb();
    const newPost = new Post({
      // belum selesai
      title,
      desc,
    });
    await newPost.save();
    console.log(displayname, title, desc, img.name);
    console.log("Post has been saved");
    revalidatePath("/blog");
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDb();
    await Post.findByIdAndDelete(id);
    console.log("Post has been deleted");
    revalidatePath("/blog");
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
