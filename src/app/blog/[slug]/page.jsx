import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

export const metadata = {
  title: `HX Post Pages`,
  description: "Post description",
};

async function getPost(params) {
  const rest = await fetch(`http://localhost:3000/api/blog/${params}`);

  if (!rest.ok) {
    throw new Error(err);
  }
  return rest.json();
}

export default async function singlePost({ params, searchParams }) {
  const posts = await getPost(params.slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={posts?.img} fill alt="" className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{posts?.title}</h1>
        <div className={styles.detail}>
          <Suspense>
            <PostUser userId={posts?.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{posts.createdAt}</span>
          </div>
        </div>
        <div className={styles.content}>{posts?.desc}</div>
      </div>
    </div>
  );
}
