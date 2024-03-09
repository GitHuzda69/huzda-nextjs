import Image from "next/image";
import styles from "./Post.module.css";
import { addPost } from "@/lib/actions";

export const metadata = {
  title: "Post pages",
  description: "Post description",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/navia.PNG" fill alt="" className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action={addPost} className={styles.form}>
          <input type="text" placeholder="Your Name" name="displayname" />
          <input type="text" placeholder="Enter Title" name="title" />
          <button>
            <input type="file" className={styles.hidden} name="img" />
          </button>
          <textarea name="desc" id="desc" placeholder="Desc" cols="30" rows="10" />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}
