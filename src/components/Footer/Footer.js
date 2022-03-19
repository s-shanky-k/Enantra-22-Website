import React from "react";
import { SOCIAL_MEDIAS } from "../../data/Footer";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.brandContainer}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Logos/ausec.png`}
          />
        </div>
        <div className={`${styles.socialMediaContainer}`}>
          {SOCIAL_MEDIAS.map((item, index) => {
            return (
              <div key={index} onClick={() => window.open(item.url)}>
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.creditsContainer}`}>
        <p>
          Developed by&nbsp;
          <span
            className={`${styles.csauBrand}`}
            onClick={() => window.open("https://csau.in/")}
          >
            CSAU
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
