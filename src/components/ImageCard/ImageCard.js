import React from "react";
import styles from "./ImageCard.module.css";

// Usage:
/* <ImageCard props={{
	title: props.organizer_title,
	description: props.organizer_description,
	img: props.organizer_img,
}}/> */

function ImageCard({ props }) {
	return (
		<>
			<div className={styles.cardContainer}>
				<div className={styles.textContainer}>
					<div className={styles.title}>{props.title}</div>
				</div>
				<div className={styles.imgContainer}>
					<img
						className={styles.img}
						src={`${process.env.PUBLIC_URL}/images/${props.img}`}
						alt=""
					></img>
				</div>
				<div className={styles.description}>{props.description}</div>
			</div>
		</>
	);
}

export default ImageCard;
