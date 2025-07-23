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
          An Ecosystem Empowering
          <br />
          Education & Innovation
        </h2>
        <div className={styles.line_break}></div>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <h3 className={styles.list_heading}>Your Growth, Our Mission</h3>
            <p className={styles.list_paragraph}>
              At The Entangle, we are dedicated to nurturing minds and bridging
              the gap between knowledge and real-world impact. Whether you're a
              student, professional, or institution, we collaborate closely to
              ensure your journey is transformative.
            </p>
          </li>
          <li className={styles.list_item}>
            <h3 className={styles.list_heading}>You Can Trust</h3>
            <p className={styles.list_paragraph}>
              From hands-on training and skill development to global conferences
              and cutting-edge projects, The Entangle is your trusted partner in
              growth, innovation, and success.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutEntangle;
