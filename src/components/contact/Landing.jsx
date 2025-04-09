import React from "react";
import styles from "../../styles/conatct/Landing.module.css";
import PrimaryBtn from "../PrimaryBtn";

import landing_video from "../../assets/landing_bg.mp4";

function Landing() {
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <h1 className={styles.heading}>
          Any Questions Rising?
          <br />
          We are All Here.
        </h1>
        <p className={styles.paragraph}>
          Whether you have a question, need assistance, or want to start a new
          project, our team is here to help.
        </p>
        <PrimaryBtn title="Fill The Form Out!" />
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
