"use client";

import { useState } from "react";
import styles from "./Links.module.css";
import NavLinks from "./navLinks/navLinks";
import { gitHubLogout } from "@/lib/actions";

export default function Links(session) {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Post",
      path: "/post",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  //TEMPORARY
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks items={link} key={link.title} />
        ))}

        {session.session ? (
          <>
            {isAdmin ? <NavLinks items={{ title: "Admin", path: "/admin" }} /> : ""}
            <form action={gitHubLogout}>
              <button className={styles.button}>Logout</button>
            </form>
          </>
        ) : (
          <NavLinks items={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
        Menu
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
