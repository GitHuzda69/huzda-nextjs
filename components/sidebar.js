import styles from "@/styles/Sidebar.module.css"
import Link from "next/link";

export default function Sidebar () {
    return (
        <div className={styles.sidebar}>
      <h2>Sidebar</h2>
      <ul>
        <Link href="/dashboard">Dashboard</Link>
        <li>Menu Item 2</li>
        <Link href="/about">About</Link>
      </ul>
    </div>
    )
}