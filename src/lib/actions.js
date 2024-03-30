"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

import bcrypt from "bcrypt";

export const addPost = async (previousState, formData) => {
  const { title, desc, img, userId } = Object.fromEntries(formData);
  console.log({ title, desc, img, userId });

  try {
    connectDb();
    const newPost = new Post({
      title,
      desc,
      img,
      userId,
    });
    await newPost.save();
    console.log("Post has been saved");
    revalidatePath("/blog");
    revalidatePath("/admin");
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
    console.log("Post has beem deleted");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    return { error: "Something went wrong" };
  }
};

export const addUser = async (previousState, formData) => {
  const { username, displayname, email, password, img } =
    Object.fromEntries(formData);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectDb();
    const newUser = new User({
      username,
      displayname,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("User has been saved");
    revalidatePath("/admin");
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDb();

    await User.findByIdAndDelete({ userId: id });
    await Post.deleteMany(id);
    console.log("Post has beem deleted");
    revalidatePath("/admin");
  } catch (err) {
    return { error: "Something went wrong" };
  }
};

export const gitHubLogin = async () => {
  await signIn("github");
};

export const gitHubLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, displayname, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Password do not match" };
  }
  try {
    connectDb();
    const userCheck = await User.findOne({ username: username });
    const emailCheck = await User.findOne({ email: email });
    if (userCheck) {
      return { error: "Username already exist" };
    }
    if (emailCheck) {
      return { error: "Email already exist" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      displayname,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  await signIn("credentials", { username, password });

  if (isRedirectError) {
    redirect("/");
  }

  throw new Error("failed");
};
