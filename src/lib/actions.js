"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

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

export const gitHubLogin = async () => {
  await signIn("github");
};

export const gitHubLogout = async () => {
  await signOut();
};

export const register = async (formData) => {
  const { username, displayname, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "Password do not match";
  }
  try {
    connectDb();
    const userCheck = await User.findOne({ username: username });
    const emailCheck = await User.findOne({ email: email });
    console.log("checked");
    if (userCheck) {
      return "Username already exist";
    }
    if (emailCheck) {
      return "Email already exist";
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
    console.log("User saved");
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  await signIn("credentials", { username, password });
  if (!signIn) {
    throw new Error("Login failed");
  }
};
