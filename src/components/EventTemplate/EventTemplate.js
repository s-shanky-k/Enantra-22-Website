import React from "react";
import styles from "./EventTemplate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextCard from "../TextCard/TextCard";
import {
	faCalendarDay,
	faLocationDot,
	faClock,
	faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

function EventTemplate({ props }) {
	return (
		<div className={styles.eventTemplateContainer}>
			<div className={styles.eventDetails}>
				<div className={styles.eventImgContainer}>
					<img
						className={styles.eventImg}
						src={`${process.env.PUBLIC_URL}/images/${props.img}`}
					></img>
				</div>
				<div className={styles.eventDateTimeVenue}>
					<div className={styles.eventTime}>
						<FontAwesomeIcon
							icon={faClock}
							className={styles.eventIcons}
						/>
						{props.time}
					</div>
					<div className={styles.eventDate}>
						<FontAwesomeIcon
							icon={faCalendarDay}
							className={styles.eventIcons}
						/>
						{props.date}
					</div>
					<div className={styles.eventVenue}>
						<FontAwesomeIcon
							icon={faLocationDot}
							className={styles.eventIcons}
						/>
						{props.venue}
					</div>
				</div>
				<button>
					Register-
					<FontAwesomeIcon icon={faIndianRupeeSign} />
					{props.fee}
				</button>
			</div>
			<div className={styles.eventDescription}>
				<TextCard
					props={{
						title: props.title,
						description: props.description,
						contact: props.contact,
					}}
				/>
			</div>
		</div>
	);
}

export default EventTemplate;
