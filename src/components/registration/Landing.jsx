import React from "react";
import styles from "../../styles/conatct/Landing.module.css";
import PrimaryBtn from "../PrimaryBtn";

import landing_video from "../../assets/landing_bg.mp4";
import { useParams } from "react-router-dom";

function Landing() {

    const {id} = useParams();
    

  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <h1 className={styles.heading}>
          Want to register?
          <br />
          We are all set.
        </h1>
        <p className={styles.paragraph}>
          Kickstart your tech journey with hands-on learning, expert mentorship, and real-world projects. Reserve your spot now—limited seats only!
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
