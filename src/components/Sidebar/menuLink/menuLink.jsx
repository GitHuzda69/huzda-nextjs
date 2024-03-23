"use client";

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

export function MenuLink(item) {
  const pathname = usePathname();
  return (
    <Link
      href={item.item.path}
      className={`${styles.container} ${
        pathname === item.item.path && styles.active
      }`}
    >
      {item.item.icon}
      {item.item.title}
    </Link>
  );
}
