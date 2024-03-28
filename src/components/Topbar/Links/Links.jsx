"use client";

import { useState } from "react";
import styles from "./Links.module.css";
import NavLinks from "./navLinks/navLinks";
import { gitHubLogout } from "@/lib/actions";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useTheme } from "next-themes";

export default function Links(session) {
  const isAdmin = true;
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Post",
      path: "/post",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks items={link} key={link.title} />
        ))}

        {session.session ? (
          <>
            {isAdmin ? (
              <NavLinks items={{ title: "Admin", path: "/admin" }} />
            ) : (
              ""
            )}
            <form action={gitHubLogout}>
              <button className={styles.button}>Logout</button>
            </form>
          </>
        ) : (
          <NavLinks items={{ title: "Login", path: "/login" }} />
        )}
        <button
          className={styles.darkToggle}
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? (
            <ContrastIcon fontSize="medium" />
          ) : (
            <DarkModeIcon fontSize="medium" />
          )}
        </button>
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        <MenuOutlinedIcon />
      </button>
      {open && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <NavLinks items={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
