import React from "react";
import styles from "./SimpleLoader.module.css";

function SimpleLoader({ text = "Loading" }) {
  return (
    <div className={`${styles.loaderContainer}`}>
      <div className={`${styles.loader}`}></div>
      <p>{text}</p>
    </div>
  );
}

export default SimpleLoader;
