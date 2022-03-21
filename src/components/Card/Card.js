import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

// Usage:
// <Card
//     props={{
//         img: "netflixlogo.jpg",
//         title: "Title",
//         description: "This is the description about the event",
//			href:"/events"
//     }}
// />

function Card({ props, onImageLoad }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <Link to={props.url}>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src={`${props.img}`}
              alt=""
              onLoad={onImageLoad}
            ></img>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.oneLiner}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
