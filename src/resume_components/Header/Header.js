import React from "react";

// import resumeSvg from "../../assets/resume.svg";
import rs from '../../image/rs.jpg'

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume Maker</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's your own</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={rs} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;