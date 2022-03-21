import React, { useRef, useState } from "react";
import styles from "./MiniEvents.module.css";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import SimpleLoader from "../../components/SimpleLoader/SimpleLoader";

import { MINI_EVENTS } from "../../data/MiniEvents";

function MiniEvents() {
  let imageCounter = useRef(0);
  const [loader, setloader] = useState(true);

  const onImageLoad = () => {
    imageCounter.current += 1;

    // If all images are loaded, set loader to false
    if (imageCounter.current >= MINI_EVENTS.length) {
      setloader(false);
      imageCounter.current = 0;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgDiv}></div>
      <div className={styles.innerWrapper}>
        <div className={styles.headingContainer}>
          <Heading text={"Mini Events"} />
        </div>
        {loader && <SimpleLoader />}

        <div
          style={{ display: loader ? "none" : "flex" }}
          className={styles.eventsContainer}
        >
          {MINI_EVENTS.map((event, index) => (
            <Card key={index + 1} props={event} onImageLoad={onImageLoad} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiniEvents;
