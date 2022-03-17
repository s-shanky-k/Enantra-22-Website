import React from "react";
import styles from "./Card.module.css";

function Card() {
	return (
		<>
			<div className={styles.cardContainer}>
				<div className={styles.imgContainer}>
					<img
						className={styles.img}
						src={`${process.env.PUBLIC_URL}/images/netflixlogo.jpg`}
					></img>
				</div>
				<div className={styles.textContainer}>
					<div className={styles.title}>Title</div>
					<div className={styles.description}>
						This is the description about the event
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
