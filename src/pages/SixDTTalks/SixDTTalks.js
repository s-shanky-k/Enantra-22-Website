import React from "react";
import styles from "./SixDTTalks.module.css";
import SpeakerCard from "../../components/SpeakerCard/SpeakerCard";
import { SixDTTalksData } from "../../assets/data/SixDTTalksData";

function SixDTTalks() {
	return (
		<div className={styles.container}>
			{SixDTTalksData.map((item, index) => (
				<SpeakerCard key={index + 1} props={item} />
			))}
		</div>
	);
}

export default SixDTTalks;
