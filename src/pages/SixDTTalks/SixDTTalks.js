import React from "react";
import styles from "./SixDTTalks.module.css";
import SpeakerCard from "../../components/SpeakerCard/SpeakerCard";
import { SixDTTalksData } from "../../assets/data/SixDTTalksData";
import Button from "../../components/Button/Button";

function SixDTTalks() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
        <h1>6DT</h1>
      </div>

      <div className={styles.speakersContainer}>
        {SixDTTalksData.map((item, index) => (
          <SpeakerCard key={index + 1} props={item} />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button text={"Register"} />
      </div>
    </div>
  );
}

export default SixDTTalks;
