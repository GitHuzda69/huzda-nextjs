import PostCard from "@/components/postCard/page";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/api";

export const metadata = {
  title: `HX Blob Pages`,
  description: "Blog pages description",
};

export default async function Page() {
  const res = await getPosts();
  return (
    <div className={styles.container}>
      {res.map((a) => (
        <div className={styles.post} key={a.id}>
          <PostCard post={a} />
        </div>
      ))}
    </div>
  );
}
