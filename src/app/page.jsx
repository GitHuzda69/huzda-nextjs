import Image from "next/image";
import styles from "./page.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export const metadata = {
  title: `HX Dashboard`,
  description: "OCPP WEB SIMULATOR",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>OCPP Web Simulator</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className={styles.buttons}>
          <div className={styles.button}>Learn More</div>
          <div className={styles.button}>Docs</div>
        </div>
        <div className={styles.brands}>
          <GitHubIcon style={{ fontSize: 64, margin: '0 20px' }} />
          <GoogleIcon style={{ fontSize: 64, margin: '0 20px' }} />
          <FacebookIcon style={{ fontSize: 64, margin: '0 20px' }} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/pekora.PNG" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
