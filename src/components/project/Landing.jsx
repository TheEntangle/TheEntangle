import React from "react";
import styles from "../../styles/project/Landing.module.css";
import landing_video from "../../assets/landing_bg.mp4";
import PrimaryBtn from "../PrimaryBtn";

function Landing({ data }) {
  // Destructure data if needed 
  const { heading, tags, description, date, live_link, category } = data;
  // If you need to use the data, you can do so here
  
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <div className={styles.date_tag_ctr}>
          <span className={styles.date_tag}>DATE</span>
          <span className={styles.date_fig}>{date}</span>
        </div>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.paragraph}>
          {description}
        </p>
        <div className={styles.project_tags_ctr}>
          {tags? tags.map((tag, index) => (
            <span key={index} className={styles.project_tag}>
              {tag}
            </span>
            )) : null}
          
        </div>
      </div>

      <div className={styles.c2}>
        <div className={styles.project_details_ctr}>
          
          <div className={styles.project_detail}>
            <span>Category</span>
            <h2>{category}</h2>
          </div>
          <div className={styles.seperator}></div>
          <div className={styles.project_detail}>
            <span>Client</span>
            <h2>{heading}</h2>
          </div>
          <PrimaryBtn title="View live website" path={live_link} />

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
