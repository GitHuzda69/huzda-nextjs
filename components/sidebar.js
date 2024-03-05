import styles from "@/styles/Sidebar.module.css"

export default function Sidebar () {
    return (
        <div className={styles.sidebar}>
      <h2>Sidebar</h2>
      <ul>
        <a href="/dashboard">Dashboard</a>
        <li>Menu Item 2</li>
        <a href="/about">About</a>
      </ul>
    </div>
    )
}