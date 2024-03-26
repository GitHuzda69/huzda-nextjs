import styles from "./Card.module.css";
import PeopleIcon from "@mui/icons-material/People";

export function Card() {
  return (
    <div className={styles.container}>
      <PeopleIcon />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.244</span>
        <span className={styles.detail}>
          <span className={styles.positive}>10% </span>more than previous
        </span>
      </div>
    </div>
  );
}
