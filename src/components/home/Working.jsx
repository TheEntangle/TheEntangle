import React from "react";
import styles from "../../styles/home/Working.module.css";
import JellyTag from "../JellyTag.jsx";
import card_bg from "../../assets/card_bg_.avif";
import { shine } from "../../assets/icons";
import { rocket } from "../../assets/rocket_icon.jsx";

function Working() {
  return (
    <section className={styles.working_section}>
      <div className={styles.c1}>
        <JellyTag title="How we work?" />
        <h2 className={styles.heading}>
          We simplify the journey <br />
          <span>from Design to Launch.</span>
        </h2>
        <p className={styles.paragraph}>
          We make it easy to bring your ideas to life, guiding you from concept
          to a fully launched product.
        </p>
        <div className={styles.card}>
          <div className={styles.card_bg_ctr}>
            <img className={styles.card_bg_img} src={card_bg} alt="" />
          </div>
          <div className={styles.card_content}>
            <div className={styles.top}>
                <div className={styles.icon}>
                    {rocket}
                </div>
            </div>
            <span className={styles.card_heading}>Kickoff</span>
            <p className={styles.card_paragraph}>
              The kickoff stage is where everything begins. We align with you to
              understand your goals, vision, and expectations. Through in-depth
              discussions and thorough research.
            </p>
            <div className={styles.jelly_tag_ctr}>
              <span className={styles.jelly_tag}>20% Conversion Rates</span>
              <span className={styles.jelly_tag}>50% Reduced in CPA</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.c2}>
        <div className={styles.img_ctr}>
          {/* {shine} */}
          <img
            className={styles.hero_image}
            src="https://framerusercontent.com/images/oUAzCBZlCCsvzmsAiYQ3RDbhyg.jpeg"
            alt=""
          />
          <div className={styles.blur}></div>
        </div>
      </div>
    </section>
  );
}

export default Working;
