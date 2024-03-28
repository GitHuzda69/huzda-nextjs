import styles from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import FilterIcon from "@mui/icons-material/Filter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { MenuLink } from "./menuLink/menuLink";
import ThemeSwitch from "./theme";

export function Sidebar() {
  const menuItems = [
    {
      title: "",
      list: [
        {
          title: "",
          path: "/",
          icon: <HomeIcon fontSize="large" />,
        },
        {
          title: "",
          path: "/post",
          icon: <AddToPhotosIcon fontSize="large" />,
        },
        {
          title: "",
          path: "/blog",
          icon: <FilterIcon fontSize="large" />,
        },
        {
          title: "",
          path: "/dashboard",
          icon: <DashboardIcon fontSize="large" />,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
            <ThemeSwitch className={styles.darkToggle} />
          </li>
        ))}
      </ul>
    </div>
  );
}
