import Image from "next/image";
import styles from "./page.module.css";
import Topbar from "@/components/Topbar/Topbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export const metadata = {
  title: `HX Dashboard`,
  description: "OCPP WEB SIMULATOR",
};

export default function Home() {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>OCPP Web Simulator</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.buttons}>
            <div className={styles.button}>Learn More</div>
            <div className={styles.button}>Docs</div>
          </div>
          <div className={styles.brands}>
            <GitHubIcon style={{ fontSize: 64, margin: "0 20px" }} />
            <GoogleIcon style={{ fontSize: 64, margin: "0 20px" }} />
            <FacebookIcon style={{ fontSize: 64, margin: "0 20px" }} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/pekora.PNG" alt="" fill className={styles.heroImg} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/iura.PNG" alt="" fill className={styles.heroImg} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title2}>Start smaller makes world easier</h1>
          <p className={styles.desc}>
            Creating small project to improve education and view diffent. With
            consistent will make world better.
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
      </div>
    </>
  );
}
