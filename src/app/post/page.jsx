import Image from "next/image";
import styles from "./Post.module.css";
import PostForm from "@/components/postForm/postForm";
import { auth } from "@/lib/auth";
import Topbar from "@/components/Topbar/Topbar";

export const metadata = {
  title: "Post pages",
  description: "Post description",
};

export default async function Page() {
  const session = await auth();

  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/navia.PNG"
            fill
            sizes="100vw 50vw"
            priority
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.formContainer}>
          <PostForm userId={session?.user.id} />
        </div>
      </div>
    </>
  );
}
