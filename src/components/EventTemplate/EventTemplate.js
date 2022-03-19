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

// Usage:
// <EventTemplate
// 	props={{
// 		img: "netflixlogo.jpg",
// 		title: "Event Name",
// 		description:
// 			"This is the description about the event. This a ultra mass OP Max event. This a ultra mass OP Max event. This a ultra mass OP Max event. This the description about the event. This is the description about the event",
// 		time: "2:00 PM",
// 		date: "23rd March, 2022",
// 		venue: "CEG, Anna University",
// 		fee: "1000",
// 		contact: "Shankar - 6969696969",
// 		href: "https://www.youtube.com/watch?v=8FAUEv_E_xQ&ab_channel=SunTV",
// 	}}
// />;

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
				<a href={props.href} target="_blank" rel="noopener noreferrer">
					Register-
					<FontAwesomeIcon icon={faIndianRupeeSign} />
					{props.fee}
				</a>
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
