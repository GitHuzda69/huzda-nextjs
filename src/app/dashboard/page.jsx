import { Sidebar } from "@/components/Sidebar/Sidebar";
import styles from "./dashboard.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Card } from "@/components/Card/Card";
import { Transaction } from "@/components/Transaction/Transsaction";
import { Chart } from "@/components/Chart/Chart";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.cards}>
              <Card />
              <Card />
              <Card />
            </div>
              <Transaction />
              <Chart />
            </div>

        </div>
      </div>
    </div>
  );
}
