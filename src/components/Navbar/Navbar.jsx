import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Navbar</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <SearchIcon className={styles.logo} />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
      </div>
    </div>
  );
}
