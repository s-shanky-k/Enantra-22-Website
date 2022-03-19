import React from "react";
import styles from "./SixDTTalks.module.css";
import SpeakerCard from "../../components/SpeakerCard/SpeakerCard";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import { SixDTTalksData } from "../../data/SixDTTalks";

function SixDTTalks() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.bgDiv}></div>
			<div className={styles.innerWrapper}>
				<div className={styles.headingContainer}>
					<Heading text={"6DT"} />
				</div>

				<div className={styles.speakersContainer}>
					{SixDTTalksData.map((item, index) => (
						<SpeakerCard key={index + 1} props={item} />
					))}
				</div>

				<div className={styles.buttonContainer}>
					<Button
						props={{
							text: "Register",
							href: "https://www.youtube.com/watch?v=jmwU1iAC-IE",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default SixDTTalks;
