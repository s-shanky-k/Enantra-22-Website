import React, { useContext } from "react";
import styles from "./ThemeToggler.module.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeTogglerFunc, Theme } from "../../App";
function ThemeToggler() {
  let themeTogglerFunc = useContext(ThemeTogglerFunc);
  let theme = useContext(Theme);
  return (
    <div className={`${styles.wrapper}`} onClick={themeTogglerFunc}>
      {theme === "dark" ? (
        <DarkModeIcon className={`${styles.icon}`} />
      ) : (
        <LightModeIcon className={`${styles.icon}`} />
      )}
    </div>
  );
}

export default ThemeToggler;
