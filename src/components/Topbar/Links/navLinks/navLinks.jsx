"use client";

import Link from "next/link";
import styles from "./navLinks.module.css";
import { usePathname } from "next/navigation";

export default function NavLinks(items) {
  const pathName = usePathname();
  // console.log(items);
  return (
    <Link href={items.items.path} className={`${styles.container} ${pathName === items.items.path && styles.active}`}>
      {items.items.title}
    </Link>
  );
}
