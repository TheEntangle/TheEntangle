import React from "react";
import styles from "../../styles/home/AboutEntangle.module.css";

function AboutEntangle() {
  return (
    <section>
      <div className={styles.c1}>
        <img
          className={styles.image}
          src="https://framerusercontent.com/images/Qnjbg5sx80zqC8P7TMF9g3DgCA.jpeg?scale-down-to=2048"
          alt=""
        />
      </div>
      <div className={styles.c2}>
        <span className={styles.jelly_tag}>About Entangle</span>
        <p>
          We are committed to shaping future leaders by fostering creativity,
          enhancing skills, and providing a platform for growth and success.
        </p>
        <ul>
          <li>A roadmap to growth and success.</li>
          <li>Delivering cutting-edge solutions with innovation.</li>
          <li>Bringing together thought leaders and innovators.</li>
          <li>Encouraging knowledge-sharing and collaboration.</li>
          <li>Bridging the gap between learning and real-world success.</li>
        </ul>
        <a href="" className={styles.primary_btn}>View About Entangle</a>
      </div>
    </section>
  );
}

export default AboutEntangle;
