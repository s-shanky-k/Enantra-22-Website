import React from "react";
import styles from "./Button.module.css";

function Button({ props }) {
	// return <div className={`${styles.button}`}>{text}</div>;
	return (
		<div
			className={`${styles.button_base} ${styles.b05_3d_roll}`}
			onClick={props.onClickMethod}
		>
			<div>{props.text}</div>
			<div>{props.text}</div>
		</div>
	);
}

export default Button;
