import Image from "next/image";
import styles from "./Post.module.css";
import { addPost } from "@/lib/actions";
import PostForm from "@/components/postForm/postForm";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "Post pages",
  description: "Post description",
};

export default async function Page() {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/navia.PNG" fill alt="" className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <PostForm userId={session?.user.id} />
      </div>
    </div>
  );
}
