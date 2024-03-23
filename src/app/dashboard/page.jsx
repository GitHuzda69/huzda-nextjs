import { Sidebar } from "@/components/Sidebar/Sidebar";
import styles from "./dashboard.module.css";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        Dashboard
      </div>
    </div>
  );
}
