import React from "react";
import styles from "../styles/TaazaKhabar.module.css";

function TaazaKhabar() {
  return (
    <section class={styles.animation_section}>
      <div class={styles.marquee_box}>
        <h2 class={styles.marquee_text}>
          <span className={styles.txtbox}>
            Where Ideas Turn Into Innovation. A National-Level <strong>Hackathon</strong> & <strong>Ideathon</strong> by <strong>The Entangle-X</strong>
          </span>{" "}
          <span className={styles.txtbox}>|</span>
          <span className={styles.txtbox}>Coming Soon</span>{" "}
          <span className={styles.txtbox}>|</span>
        </h2>
        <h2 class={styles.marquee_text}>
          <span className={styles.txtbox}>
            Where Ideas Turn Into Innovation. A National-Level <strong>Hackathon</strong> & <strong>Ideathon</strong> by <strong>The Entangle-X</strong>
          </span>{" "}
          <span className={styles.txtbox}>|</span>
          <span className={styles.txtbox}>Coming Soon</span>{" "}
          <span className={styles.txtbox}>|</span>
        </h2>
      </div>
    </section>
  );
}

export default TaazaKhabar;
