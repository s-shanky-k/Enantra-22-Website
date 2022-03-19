import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styles from "./PageLander.module.css";

import { gsap, Power3, Quad } from "gsap";
import Typewriter from "typewriter-effect";

function PageLander() {
  let titleRef = useRef(null);
  let typewriterRef = useRef(null);
  let arrowRef = useRef(null);

  let timeline = gsap.timeline();

  useEffect(() => {
    timeline.from(titleRef.current, {
      duration: 1.5,
      opacity: 0,
      y: "50px",
      ease: Power3.easeOut,
      delay: 1,
    });

    timeline.from([typewriterRef.current, arrowRef.current], {
      duration: 1,
      opacity: 0,
    });

    return () => {};
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.light} ${styles.x1}`}></div>
      <div className={`${styles.light} ${styles.x2}`}></div>
      <div className={`${styles.light} ${styles.x3}`}></div>
      <div className={`${styles.light} ${styles.x4}`}></div>
      <div className={`${styles.light} ${styles.x5}`}></div>
      <div className={`${styles.light} ${styles.x6}`}></div>
      <div className={`${styles.light} ${styles.x7}`}></div>
      <div className={`${styles.light} ${styles.x8}`}></div>
      <div className={`${styles.light} ${styles.x9}`}></div>
      <div className={`${styles.contentContainer}`}>
        <div className={`${styles.titleContainer}`}>
          <h1 ref={titleRef}>Enantra'22</h1>
        </div>
        <div className={`${styles.subTitleContainer}`}>
          <div ref={typewriterRef}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("Hustle 24/7")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("April 2,3,4")
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>
          <Link to="main" spy={true}>
            <div ref={arrowRef} className={`${styles.arrow}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageLander;
