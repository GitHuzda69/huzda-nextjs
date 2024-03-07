import Image from "next/image";
import styles from "./About.module.css"

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Start smaller makes world easier</h1>
        <p className={styles.desc}>Creating small project to improve education and view diffent.
          With consistent will make world better.
        </p>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h1>1 K+</h1>
          <p>Hour of experience</p>
        </div>
        <div className={styles.box}>
          <h1>10K+</h1>
          <p>Project created</p>
        </div>
        <div className={styles.box}>
          <h1>100 K+</h1>
          <p>Troubleshooting</p>
        </div>
      </div>
      </div>
      <div className={styles.imgContainer}>
    <Image src="/iura.PNG" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
