import React, { useRef, useState } from "react";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import SimpleLoader from "../../components/SimpleLoader/SimpleLoader";
import { WORKSHOPS } from "../../data/Workshops";
import styles from "./Workshops.module.css";

function Workshops() {
  let imageCounter = useRef(0);
  const [loader, setloader] = useState(true);

  const onImageLoad = () => {
    imageCounter.current += 1;

    // If all images are loaded, set loader to false
    if (imageCounter.current >= WORKSHOPS.length) {
      setloader(false);
      imageCounter.current = 0;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgDiv}></div>
      <div className={styles.innerWrapper}>
        <div className={styles.headingContainer}>
          <Heading text={"Workshops"} />
        </div>

        {loader && <SimpleLoader />}

        <div
          style={{ display: loader ? "none" : "flex" }}
          className={styles.workshopsContainer}
        >
          {WORKSHOPS.map((workshop, index) => (
            <Card key={index + 1} props={workshop} onImageLoad={onImageLoad} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workshops;
