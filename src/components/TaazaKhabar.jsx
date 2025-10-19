import React from "react";
import styles from "../styles/TaazaKhabar.module.css";

function TaazaKhabar() {
  return (
    <section class={styles.animation_section}>
      <div class={styles.marquee_box}>
        <h2 class={styles.marquee_text}>
          <span className={styles.txtbox}>
            Our new batches for C/C++ and DSA are starting from 3rd November
          </span>{" "}
          <span className={styles.txtbox}>|</span>
          <span className={styles.txtbox}>Limited seats only</span>{" "}
          <span className={styles.txtbox}>|</span>
        </h2>
        <h2 class={styles.marquee_text}>
          <span className={styles.txtbox}>
            Our new batches for C/C++ and DSA are starting from 3rd November
          </span>{" "}
          <span className={styles.txtbox}>|</span>
          <span className={styles.txtbox}>Limited seats only</span>{" "}
          <span className={styles.txtbox}>|</span>
        </h2>
      </div>
    </section>
  );
}

export default TaazaKhabar;
