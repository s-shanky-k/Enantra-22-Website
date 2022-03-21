import React from "react";
import Heading from "../../../components/Heading/Heading";
import { sponsorImageBasePath, SPONSORS } from "../../../data/Sponsors";
import styles from "./Sponsors.module.css";

function Sponsors() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.headingContainer}`}>
        <Heading text={"Sponsors"} />
      </div>
      <div className={`${styles.mainContainer}`}>
        {SPONSORS.map((sponsor, index) => {
          return (
            <img
              src={sponsorImageBasePath + sponsor}
              key={index}
              alt={sponsor}
              className={`${styles.image}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sponsors;
