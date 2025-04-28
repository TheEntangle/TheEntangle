import React from "react";
import styles from "../../styles/about/AboutEntangle.module.css";
import { point } from "../../assets/icons";

import PrimaryBtn from "../PrimaryBtn";

function AboutEntangle() {
  return (
    <section className={styles.aboutentangle_section}>
      <div className={styles.c1}>
        <div className={styles.img_ctr}>
          <img
            className={styles.image}
            src="https://framerusercontent.com/images/Qnjbg5sx80zqC8P7TMF9g3DgCA.jpeg?scale-down-to=2048"
            alt=""
          />
          <div className={styles.blur}></div>
        </div>
      </div>

      <div className={styles.c2}>
        <span className={styles.jelly_tag}>
          <div className={styles.dot}></div>About Entangle
        </span>
        <h2 className={styles.heading}>
          An Agency With Classic
          <br />
          Revolutionary Skills!
        </h2>
        <div className={styles.line_break}></div>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <h3 className={styles.list_heading}>Your Success, Our Priority</h3>
            <p className={styles.list_paragraph}>
              At Landin, we believe in empowering our clients to achieve their
              goals. Our team works closely with you.
            </p>
          </li>
          <li className={styles.list_item}>
            <h3 className={styles.list_heading}>Partners You Can Rely On</h3>
            <p className={styles.list_paragraph}>
              Landin is here to ensure your success with expert guidance and
              collaborative teamwork.
            </p>
          </li>
        </ul>
        {/* <p className={styles.paragraph}>
          We are committed to shaping future leaders by fostering creativity,
          enhancing skills, and providing a platform for growth and success.
        </p> */}
        {/* <ul className={styles.list}>
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
        </ul> */}
        <PrimaryBtn title="View About Entangle" />
      </div>
    </section>
  );
}

export default AboutEntangle;
