import React from "react";
import styles from "./MiniEvents.module.css";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";

import { MINI_EVENTS } from "../../data/MiniEvents";

function MiniEvents() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgDiv}></div>
      <div className={styles.innerWrapper}>
        <div className={styles.headingContainer}>
          <Heading text={"Mini Events"} />
        </div>

        <div className={styles.eventsContainer}>
          {MINI_EVENTS.map((event, index) => (
            <Card key={index + 1} props={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiniEvents;
