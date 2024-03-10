import PostCard from "@/components/postCard/page";
import styles from "./blog.module.css";

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
    <div className={styles.container}>
      {res.map((a) => (
        <div className={styles.post} key={a._id}>
          <PostCard post={a} />
        </div>
      ))}
    </div>
  );
}
