import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export default function PostCard(post) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {/* <Image src="/iura.PNG" alt="" fill className={styles.img} /> */}
          <Image src={post.post.img} alt="" fill sizes="100vw" className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.post.title}</h1>
        <p className={styles.date}>{post.post.date}</p>
        <p className={styles.desc}>{post.post.desc}</p>
        <Link href={`/blog/${post.post._id}`} className={styles.links}>
          Read More...
        </Link>
      </div>
    </div>
  );
}
