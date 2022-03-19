import React from "react";
import styles from "./SpeakerCard.module.css";

function SpeakerCard() {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.cardImg}>
					<img
						src={`${process.env.PUBLIC_URL}/images/netflixlogo.jpg`}
					/>
				</div>
				<div className={styles.cardContent}>
					<h2 className={styles.bigTitle}>Kishan Das</h2>
					<h3 className={styles.mediumTitle}>Noob</h3>
				</div>
			</div>
		</div>
	);
}

export default SpeakerCard;
