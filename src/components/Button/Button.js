import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ props }) {
  // return <div className={`${styles.button}`}>{text}</div>;
  return (
    <div className={`${styles.button_base} ${styles.b05_3d_roll}`}>
      <div>{props.text}</div>
      <div>{props.text}</div>
    </div>
  );
}

export default Button;
