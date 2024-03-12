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

export const register = async (previousState, formData) => {
  const { username, displayname, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Password do not match"};
  }
  try {
    connectDb();
    const userCheck = await User.findOne({ username: username });
    const emailCheck = await User.findOne({ email: email });
    if (userCheck) {
      return { error: "Username already exist"};
    }
    if (emailCheck) {
      return { error: "Email already exist"};
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
    return {success : true};
  } catch (err) {
      console.error(err);
    return { error: "Something went wrong"};
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try{
    await signIn("credentials", { username, password });
  } catch (err) {
    console.error(err);
    if (err.message.includes("CredentialsSignIn")) {
      return {error : "Invalid username or password" }
    }
  }
  return { error: "Something went error"}
};
