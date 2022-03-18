import React from "react";
import styles from "./EventTemplate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextCard from "../TextCard/TextCard";
import {
	faCalendarDay,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function EventTemplate() {
	return (
		<div className={styles.eventTemplateContainer}>
			<div className={styles.eventDetails}>
				<div className={styles.eventImgContainer}>
					<img
						className={styles.eventImg}
						src={`${process.env.PUBLIC_URL}/images/netflixlogo.jpg`}
					></img>
				</div>
				<div className={styles.eventDateTimeVenue}>
					<div className={styles.eventDateTime}>
						<FontAwesomeIcon
							icon={faCalendarDay}
							className={styles.eventIcons}
						/>
						23rd March, 2022
					</div>
					<div className={styles.eventVenue}>
						<FontAwesomeIcon
							icon={faLocationDot}
							className={styles.eventIcons}
						/>
						CEG, Anna University
					</div>
				</div>
				<button>REGISTER</button>
			</div>
			<div className={styles.eventDescription}>
				<TextCard
					props={{
						title: "Event Name",
						description:
							"This is a mega monster event. This is a mega monster event. This is a mega monster event. This is a mega monster event. This is a mega monster event. This is a mega monster event.",
					}}
				/>
			</div>
		</div>
	);
}

export default EventTemplate;
