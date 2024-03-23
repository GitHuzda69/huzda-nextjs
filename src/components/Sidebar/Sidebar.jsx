import styles from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import FilterIcon from "@mui/icons-material/Filter";
import { MenuLink } from "./menuLink/menuLink";

export function Sidebar() {
  const menuItems = [
    {
      title: "",
      list: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Post",
          path: "/post",
        },
        {
          title: "",
          path: "/Blog",
          icon: <FilterIcon />,
        },
        {
          title: "",
          path: "/dashboard/transactions",
          icon: <HomeIcon />,
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
          </li>
        ))}
      </ul>
    </div>
  );
}
