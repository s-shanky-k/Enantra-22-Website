import React from "react";
import styles from "./SpeakerCard.module.css";

// Usage:
// <SpeakerCard
//     props={{
//         img: "netflixlogo.jpg",
//         title: "Kishan Das",
//         description: "Boomer",
//     }}
// />

function SpeakerCard({ props }) {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.cardImg}>
					<img src={`${props.img}`} />
				</div>
				<div className={styles.cardContent}>
					<h2 className={styles.bigTitle}>{props.title}</h2>
					<h3 className={styles.mediumTitle}>{props.description}</h3>
				</div>
			</div>
		</div>
	);
}

export default SpeakerCard;
