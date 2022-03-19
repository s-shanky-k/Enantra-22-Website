import React from "react";
import { ABOUT_US } from "../../data/AboutUs";
import styles from "./Landing.module.css";
import PageLander from "./PageLander/PageLander";
import Heading from "../../components/Heading/Heading";

function Landing() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.pageLanderWrapper}`}>
        <div className={`${styles.bgDiv}`}></div>
        <PageLander />
      </div>
      <div name="main" className={`${styles.mainContainer}`}>
        <div className={`${styles.aboutContainer}`}>
          {ABOUT_US.map((info, index) => {
            return (
              <div key={index} className={`${styles.content_container}`}>
                <div className={`${styles.image_box}`}>
                  <img src={`${info.image}`} alt={`${info.title}`} />
                </div>

                <div className={`${styles.text_box}`}>
                  <Heading text={info.title} />
                  <p>{info.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Landing;
