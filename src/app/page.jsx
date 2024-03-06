import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>OCPP Web Simulator</h1>
      <p className={styles.desc} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className={styles.buttons}>
      <div className={styles.button}>Learn More</div>
      <div className={styles.button}>Docs</div>
    </div>
    <div className={styles.brands}>
      <Image src="/vercel.svg" alt="" fill />
    </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/pekora.PNG" alt="" fill className={styles.heroImg} />
    </div>
  </div>);
}
