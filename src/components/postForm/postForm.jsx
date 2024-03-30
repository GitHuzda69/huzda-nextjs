"use client";

import styles from "./postForm.module.css";
import { addPost } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function PostForm(userId) {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <input type="hidden" name="userId" value={userId.userId} />
      <input type="text" placeholder="Enter Title" name="title" />
      {/* <button>
        <input type="file" className={styles.hidden} name="img" />
      </button> */}
      <input type="text" id="img" name="img" placeholder="Image" />
      <textarea name="desc" id="desc" placeholder="Desc" cols="30" rows="10" />
      <button>Post</button>
      {state && state}
    </form>
  );
}
