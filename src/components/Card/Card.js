import React from "react";
import styles from "./Card.module.css";

// Usage:
// <Card
//     props={{
//         img: "netflixlogo.jpg",
//         title: "Title",
//         description: "This is the description about the event",
//     }}
// />

function Card({ props }) {
	return (
		<>
			<div className={styles.cardContainer}>
				<div className={styles.imgContainer}>
					<img
						className={styles.img}
						src={`${process.env.PUBLIC_URL}/images/${props.img}`}
					></img>
				</div>
				<div className={styles.textContainer}>
					<div className={styles.title}>{props.title}</div>
					<div className={styles.description}>
						{props.description}
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
