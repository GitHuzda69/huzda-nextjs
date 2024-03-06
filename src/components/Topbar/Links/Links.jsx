"use client";

import { useState } from "react";
import styles from "./Links.module.css";
import NavLinks from "./navLinks/navLinks";

export default function Links() {
  const [open, setOpen] =useState(false);
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
      title: "Blog",
      path: "/blog",
    },
  ];

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link) => (
        <NavLinks items={link} key={link.title} />
      ))}

      {session ? (
        <>
          {isAdmin ? <NavLinks items={{ title: "Admin", path: "/admin" }} /> : ""}
          <button className={styles.button}>Logout</button>
        </>
      ) : (
        <NavLinks items={{ title: "Login", path: "/login" }} />
      )}
    </div>
    <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
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
