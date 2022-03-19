import React from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import SpeakerCard from "../../components/SpeakerCard/SpeakerCard";
import { SixDTTalksData } from "../../data/SixDTTalks";
import { WORKSHOPS } from "../../data/Workshops";
import styles from "./Workshops.module.css";

function Workshops() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgDiv}></div>
      <div className={styles.innerWrapper}>
        <div className={styles.headingContainer}>
          <Heading text={"Workshops"} />
        </div>

        <div className={styles.workshopsContainer}>
          {WORKSHOPS.map((workshop, index) => (
            <Card key={index + 1} props={workshop} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workshops;
