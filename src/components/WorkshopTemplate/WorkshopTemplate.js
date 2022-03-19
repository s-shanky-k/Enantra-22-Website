import React from "react";
import styles from "./WorkshopTemplate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextCard from "../TextCard/TextCard";
import {
  faCalendarDay,
  faLocationDot,
  faClock,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import ImageCard from "../ImageCard/ImageCard";

// Usage:
{
  /* <WorkshopTemplate
	props={{
		img: "netflixlogo.jpg",
		workshop_title: "Workshop Name",
		workshop_description:
			"This is the description about the workshop. This a ultra mass OP Max workshop. This a ultra mass OP Max workshop. This a ultra mass OP Max workshop. This the description about the workshop. This is the description about the workshop",
		time: "2:00 PM",
		date: "23rd March, 2022",
		venue: "CEG, Anna University",
		fee: "1000",
		contact: "Shankar - 6969696969",
		href: "https://www.youtube.com/watch?v=8FAUEv_E_xQ&ab_channel=SunTV",
		organizer_title:"Organizer",
		organizer_img:"netflixlogo.jpg",
		organizer_description:"This is a boomer"
	}} */
}
// />;

function WorkshopTemplate({ props }) {
  return (
    <div className={styles.workshopTemplateContainer}>
      <div className={styles.workshopDetails}>
        <div className={styles.workshopImgContainer}>
          <img
            className={styles.workshopImg}
            src={`${process.env.PUBLIC_URL}/images/${props.img}`}
          ></img>
        </div>
        <div className={styles.workshopDateTimeVenue}>
          <div className={styles.workshopTime}>
            <FontAwesomeIcon icon={faClock} className={styles.workshopIcons} />
            {props.time}
          </div>
          <div className={styles.workshopDate}>
            <FontAwesomeIcon
              icon={faCalendarDay}
              className={styles.workshopIcons}
            />
            {props.date}
          </div>
          <div className={styles.workshopVenue}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.workshopIcons}
            />
            {props.venue}
          </div>
        </div>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          Register-
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          {props.regFee}
        </a>
      </div>
      <div className={styles.workshopDescription}>
        <TextCard
          props={{
            title: props.title,
            description: props.description,
            contact: props.contact,
          }}
        />
        <ImageCard
          props={{
            title: props.title,
            description: props.description,
            img: props.img,
          }}
        />
      </div>
    </div>
  );
}

export default WorkshopTemplate;
