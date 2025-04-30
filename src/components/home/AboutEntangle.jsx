import React from "react";
import styles from "../../styles/home/AboutEntangle.module.css";
import { point } from "../../assets/icons";

import PrimaryBtn from "../PrimaryBtn";

function AboutEntangle() {
  return (
    <section className={styles.aboutentangle_section}>
      <div className={styles.c1}>
        <div className={styles.img_ctr}>
          <img
            className={styles.image}
            src="https://media.istockphoto.com/id/1363276509/photo/teacher-giving-computer-science-lecture-to-diverse-multiethnic-group-of-female-and-male.jpg?s=612x612&w=0&k=20&c=iHDI7pI98XJfh95nFw-wT9L9jYr0IzSBYB53riWOVsk="
            alt=""
          />
          <div className={styles.blur}></div>
        </div>
      </div>

      <div className={styles.c2}>
        <span className={styles.jelly_tag}>
          <div className={styles.dot}></div>About Entangle
        </span>
        <p className={styles.paragraph}>
          We are committed to shaping future leaders by fostering creativity,
          enhancing skills, and providing a platform for growth and success.
        </p>
        <ul className={styles.list}>
          <li>
            {point}
            <span>A roadmap to growth and success.</span>
          </li>
          <li>
            {point}
            <span>Delivering cutting-edge solutions with innovation.</span>
          </li>
          <li>
            {point}
            <span>Bringing together thought leaders and innovators.</span>
          </li>
          <li>
            {point}
            <span>Encouraging knowledge-sharing and collaboration.</span>
          </li>
          <li>
            {point}
            <span>
              Bridging the gap between learning and real-world success.
            </span>
          </li>
        </ul>
        <PrimaryBtn title="View About Entangle" path="/about" />
      </div>
    </section>
  );
}

export default AboutEntangle;
