import React from "react";
import styles from "./OrganizerCard.module.css";

function OrganizerCard({ image, name, company }) {
  return (
    <div className={`${styles.cardWrapper}`}>
      {image !== null && (
        <div className={`${styles.imageBox}`}>
          <img src={image} alt={name} />
        </div>
      )}

      <div
        className={`${styles.textBox}`}
        style={{ borderTopWidth: image !== null ? "0px" : "3px" }}
      >
        <p className={`${styles.primaryDetail}`}>{name}</p>
        <p className={`${styles.secondaryDetail}`}>{company}</p>
      </div>
    </div>
  );
}

export default OrganizerCard;
