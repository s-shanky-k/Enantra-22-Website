import React from "react";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import { MEGA_EVENTS } from "../../data/MegaEvents";
import styles from "./MegaEvents.module.css";

function MegaEvents() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgDiv}></div>
      <div className={styles.innerWrapper}>
        <div className={styles.headingContainer}>
          <Heading text={"Mega Events"} />
        </div>

        <div className={styles.eventsContainer}>
          {MEGA_EVENTS.map((event, index) => (
            <Card key={index + 1} props={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MegaEvents;
