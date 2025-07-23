import React from "react";
import styles from "../../styles/about/Landing.module.css";

import PrimaryBtn from "../PrimaryBtn";

import landing_video from "../../assets/landing_bg.mp4";

function Landing() {
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <h1 className={styles.heading}>
          Learn More About Entangle
          <br />
          Let’s Deep Dive!
        </h1>
        <p className={styles.paragraph}>
          catalyst for innovation and a hub for aspiring professionals,
          fostering growth through collaboration, knowledge-sharing, and
          real-world experiences.
        </p>
        <PrimaryBtn path="/contact" title="Connect with us" />
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
