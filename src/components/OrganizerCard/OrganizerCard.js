import React from "react";
import styles from "./OrganizerCard.module.css";

function OrganizerCard({ image, name, company }) {
  return (
    <div className={`${styles.cardWrapper}`}>
      <div className={`${styles.imageBox}`}>
        <img src={image} alt={name} />
      </div>
      <div className={`${styles.textBox}`}>
        <p className={`${styles.primaryDetail}`}>{name}</p>
        <p className={`${styles.secondaryDetail}`}>{company}</p>
      </div>
    </div>
  );
}

export default OrganizerCard;
