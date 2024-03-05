import Link from 'next/link';
import { Inter } from 'next/font/google';
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <div>
    <Image
    className={styles.center}
     src="/hehe.png"
     width={1920}
     height={1080}
     loading='lazy'
    />
    </div>
  );
}