"use client";
import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styles from "./Sidebar.module.css";
import ContrastIcon from "@mui/icons-material/Contrast";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        className={styles.darkToggle}
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? (
          <ContrastIcon fontSize="large" />
        ) : (
          <DarkModeIcon fontSize="large" />
        )}
      </button>
    </>
  );
}
