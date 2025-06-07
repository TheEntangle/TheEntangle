import React from "react";
import styles from "../../styles/project/Landing.module.css";
import landing_video from "../../assets/landing_bg.mp4";
import PrimaryBtn from "../PrimaryBtn";

function Landing() {
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <div className={styles.date_tag_ctr}>
          <span className={styles.date_tag}>DATE</span>
          <span className={styles.date_fig}>16/09/2025</span>
        </div>
        <h1 className={styles.heading}>Way Fields Studios</h1>
        <p className={styles.paragraph}>
          Way Field Studios is a cutting-edge creative agency that brings
          innovative designs and strategic solutions to life.
        </p>
        <div className={styles.project_tags_ctr}>
          <span className={styles.project_tag}>E-Commerce</span>
          <span className={styles.project_tag}>Portfolio</span>
        </div>
      </div>

      <div className={styles.c2}>
        <div className={styles.project_details_ctr}>
          <div className={styles.project_detail}>
            <span>Services</span>
            <h2>Web Design & Development</h2>
          </div>
          <div className={styles.seperator}></div>
          <div className={styles.project_detail}>
            <span>Category</span>
            <h2>Artist E-Commerce Portfolio</h2>
          </div>
          <div className={styles.seperator}></div>
          <div className={styles.project_detail}>
            <span>Client</span>
            <h2>Marco S Pentaclay</h2>
          </div>
          <PrimaryBtn title="View live website" />

          <div className={styles.glow_vfx}></div>
        </div>
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
