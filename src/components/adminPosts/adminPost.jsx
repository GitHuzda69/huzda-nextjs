import { getPostAdmin } from "@/lib/api";
import styles from "./adminPost.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";
import { Pagination } from "@/lib/pagination";

export default async function AdminPost({ searchParams }) {
  const users = searchParams?.users || 1;
  const posts = searchParams?.posts || 1;
  const { count, post } = await getPostAdmin(posts);

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {post.map((p) => (
        <div
          className={styles.post}
          key={p._id}
        >
          <div className={styles.detail}>
            <Image
              src={p.img || "/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{p.title}</span>
          </div>
          <form action={deletePost}>
            <input
              type="hidden"
              name="id"
              value={p._id}
            />
            <button
              type="submit"
              className={styles.postButton}
            >
              Delete
            </button>
          </form>
        </div>
      ))}
      <Pagination count={count} />
    </div>
  );
}
