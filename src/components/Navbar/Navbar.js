import React, { useRef, useContext, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  // const width = useContext(Width);

  const NAVLINKS = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "Mega Events",
      url: "mega-events",
    },
    {
      name: "Mini Events",
      url: "mini-events",
    },
    {
      name: "Workshops",
      url: "workshops",
    },
    {
      name: "6DT",
      url: "6dt",
    },
  ];

  let navWrapperRef = useRef();

  const toggleNav = (ACTION) => {
    switch (ACTION) {
      case "OPEN":
        navWrapperRef.current.classList.remove(`${styles.nav_close}`);
        navWrapperRef.current.classList.add(`${styles.nav_open}`);
        break;

      case "CLOSE":
        navWrapperRef.current.classList.remove(`${styles.nav_open}`);
        navWrapperRef.current.classList.add(`${styles.nav_close}`);
        break;
    }
  };

  const clickedNavLink = () => {
    if (window.innerWidth < 1024) {
      // Close Domains Nav
      toggleNav("CLOSE");
    }
  };

  return (
    <>
      <MenuIcon
        onClick={() => toggleNav("OPEN")}
        className={`${styles.hamburger}`}
      />

      <div
        ref={navWrapperRef}
        className={`${styles.nav_wrapper} ${styles.nav_close} customScrollbar`}
      >
        <CloseIcon
          className={`${styles.close_icon}`}
          onClick={() => toggleNav("CLOSE")}
        />

        <div className={`${styles.nav_container}`}>
          <div className={`${styles.brandImageContainer}`}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Logos/enantra.png`}
              alt="Enantra Logo"
            />
          </div>
          {NAVLINKS.map((link, index) => {
            return (
              <Link
                to={link.url}
                key={index}
                className={`${styles.navLink}`}
                onClick={() => toggleNav("CLOSE")}
                activeClass={`${styles.activeClass}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
