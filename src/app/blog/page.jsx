import PostCard from "@/components/postCard/page";
import styles from "./blog.module.css"

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard /> 
      </div>
      <div className={styles.post}>
        <PostCard /> 
      </div>
      <div className={styles.post}>
        <PostCard /> 
      </div>
      <div className={styles.post}>
        <PostCard /> 
      </div>
    </div>
  );
}
