import PostCard from "@/components/postCard/page";
import styles from "./blog.module.css";
import { Suspense } from "react";
import Topbar from "@/components/Topbar/Topbar";

export const metadata = {
  title: `HX Blob Pages`,
  description: "Blog pages description",
};

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/blog");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

export default async function Page() {
  const res = await getPosts();
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        {res.map((a) => (
          <div className={styles.post} key={a._id}>
            <Suspense>
              <PostCard post={a} />
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
}
