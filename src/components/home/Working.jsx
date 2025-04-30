import React from "react";
import styles from "../../styles/home/Working.module.css";
import JellyTag from "../JellyTag.jsx";
import card_bg from "../../assets/card_bg_.avif";
import { shine } from "../../assets/icons";
import { rocket } from "../../assets/rocket_icon.jsx";

function Working() {
  return (
    <section className={styles.working_section}>
      <div className={styles.working_section_div}>
        <div className={styles.c1}>
          <JellyTag title="How we work?" />
          <h2 className={styles.heading}>
            We simplify the journey <br />
            <span>from Vision to Impact.</span>
          </h2>
          <p className={styles.paragraph}>
            We transform bold ideas into real-world solutions through strategic
            planning, creative execution, collaborative teamwork, and continuous
            innovation.
          </p>
          <div className={styles.card}>
            <div className={styles.card_bg_ctr}>
              <img className={styles.card_bg_img} src={card_bg} alt="" />
            </div>
            <div className={styles.card_content}>
              <div className={styles.top}>
                <div className={styles.icon}>{rocket}</div>
              </div>
              <span className={styles.card_heading}>Envision</span>
              <p className={styles.card_paragraph}>
                We begin by deeply understanding your goals, identifying core
                challenges, and visualizing tailored, strategic solutions. This
                stage lays the foundation for innovative and impactful outcomes.
              </p>
              <div className={styles.jelly_tag_ctr}>
                <span className={styles.jelly_tag}>IdeaToAction</span>
                <span className={styles.jelly_tag}>StrategicThinking</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.c2}>
          <div className={styles.img_ctr}>
            {/* {shine} */}
            <img
              className={styles.hero_image}
              src="https://images.stockcake.com/public/4/2/4/424e0a68-d17f-4582-be6c-0878436bada6_large/team-brainstorming-session-stockcake.jpg"
              alt="brainstorming session"
            />
            <div className={styles.blur}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Working;
