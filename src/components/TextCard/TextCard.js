import React from "react";
import styles from "./TextCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// Usage:
// <Card
//     props={{
//         img: "netflixlogo.jpg",
//         title: "Title",
//         description: "This is the description about the event",
//     }}
// />

function TextCard({ props }) {
  return (
    <>
      <div className={styles.cardContainer}>
        {/* <div className={styles.imgContainer}>
					<img
						className={styles.img}
						src={`${process.env.PUBLIC_URL}/images/${props.img}`}
					></img>
				</div> */}
        <div className={styles.textContainer}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
          {props.contact !== undefined && (
            <div className={styles.contact}>
              {props.contact !== undefined &&
                props.contact.map((item, index) => {
                  return (
                    <p key={index}>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className={styles.contactIcon}
                      />
                      {item.name !== undefined ? (
                        <>
                          {item.name} - {item.mobile}
                        </>
                      ) : (
                        <>{item.mobile}</>
                      )}
                    </p>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TextCard;
