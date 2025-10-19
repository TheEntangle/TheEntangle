import React from "react";
import showreel from "../../assets/showreel.mp4";
import styles from "../../styles/about/Showreel.module.css";

function Showreel() {
  return (
    <section className={styles.showreel_section}>
      <div className={styles.showreel_ctr}>
        <video
          className={styles.showreel}
          src={showreel}
          controls
          muted
          autoPlay
          loop
        ></video>
      </div>
    </section>
  );
}

export default Showreel;
