import { Post } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    connectDb();
    const posts = await Post.findById(params.slug);
    return NextResponse.json(posts);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const DELETE = async (req, { params }) => {
  try {
    connectDb();
    await Post.findByIdAndDelete(params.slug);
    return NextResponse.json("Post has been deleted");
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
