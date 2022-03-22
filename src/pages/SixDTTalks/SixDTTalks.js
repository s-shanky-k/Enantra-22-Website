import React, { useRef, useState } from "react";
import styles from "./SixDTTalks.module.css";
import SpeakerCard from "../../components/SpeakerCard/SpeakerCard";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import { CONTACTS, SixDTTalksData } from "../../data/SixDTTalks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDay,
	faClock,
	faIndianRupeeSign,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { REGISTRATION_LINK } from "../../data/Registration";
import SimpleLoader from "../../components/SimpleLoader/SimpleLoader";

function SixDTTalks() {
	let imageCounter = useRef(0);
	const [loader, setloader] = useState(true);

	const onImageLoad = () => {
		imageCounter.current += 1;

		// If all images are loaded, set loader to false
		if (imageCounter.current >= SixDTTalksData.length) {
			setloader(false);
			imageCounter.current = 0;
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.bgDiv}></div>
			{loader && <SimpleLoader />}
			<div
				style={{ display: loader ? "none" : "flex" }}
				className={styles.innerWrapper}
			>
				<div className={styles.headingContainer}>
					<img
						src={`${process.env.PUBLIC_URL}/assets/images/SixDTTalks/icon.png`}
						className={styles.headingIcon}
					/>
					<Heading text={"6DT"} />
				</div>

				<div className={styles.contentContainer}>
					<p className={styles.description}>
						Ever experienced an efficacious entrepreneur share their
						inspiring journey? Thunderclaps echoing in the room
						listening to them? We at AUSEC are back with yet another
						edition of the most awaited event of enantra- "6 Degree
						talks" but this time with more grandeur giving you an
						opportunity to witness the opulance. Stay tuned for more
						updates and in the mean time keep guessing the key
						speakers invited for this year.
					</p>
					<p className={styles.infoLine}>
						<FontAwesomeIcon
							icon={faClock}
							className={styles.icons}
						/>
						4pm - 7pm
					</p>
					<p className={styles.infoLine}>
						<FontAwesomeIcon
							icon={faCalendarDay}
							className={styles.icons}
						/>
						April 1, 2022
					</p>
					<p className={styles.infoLine}>
						<FontAwesomeIcon
							icon={faLocationDot}
							className={styles.icons}
						/>
						Vivek Auditorium
					</p>
					<p className={styles.infoLine}>
						<FontAwesomeIcon
							icon={faIndianRupeeSign}
							className={styles.icons}
						/>
						₹150
					</p>
				</div>

				<div className={styles.speakersContainer}>
					{SixDTTalksData.map((item, index) => (
						<SpeakerCard
							key={index + 1}
							props={item}
							onImageLoad={onImageLoad}
						/>
					))}
				</div>

				<div className={styles.buttonContainer}>
					<Button
						props={{
							text: "Register",
							onClickMethod: () => window.open(REGISTRATION_LINK),
						}}
					/>
				</div>

				<div className={styles.contactContainer}>
					<p>
						For buying tickets in-person, contact&nbsp;
						{CONTACTS.map((contact, index) => {
							if (index === CONTACTS.length - 1) {
								return <span>&nbsp;{contact}.</span>;
							} else {
								return <span>&nbsp;{contact},</span>;
							}
						})}
					</p>
				</div>
			</div>
		</div>
	);
}

export default SixDTTalks;
