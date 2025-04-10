import React from "react";
import styles from "../../styles/portfolio/Landing.module.css";
import PrimaryBtn from "../PrimaryBtn";

import landing_video from "../../assets/landing_bg.mp4";

function Landing() {
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <h1 className={styles.heading}>
          Check Out Some
          <br />
          Extra-Ordinary Work.
        </h1>
        <p className={styles.paragraph}>
          WheFrom startups to established brands, we create tailored solutions
          that drive success and make a real impact.
        </p>
        <PrimaryBtn title="Build your product!" />
      </div>

      <video
        className={styles.landing_bg}
        src={landing_video}
        loop
        autoPlay
        muted
      ></video>
    </section>
  );
}

export default Landing;
