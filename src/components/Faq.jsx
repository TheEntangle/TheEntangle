import React from "react";
import styles from "../styles/Faq.module.css";
import JellyTag from "./JellyTag"

function Faq() {
  return (
    <section className={styles.faq_section}>
      <div className={styles.left}>
        <div className={styles.heading_ctr}>
          <JellyTag title="FAQ" />
          <h2 className={styles.heading}>
            Frequently <br />
            <span>Asked Questions</span>
          </h2>
          <p className={styles.paragraph}>
            Have questions? Our FAQ section has you covered with quick answers
            to the most common inquiries.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.cards_ctr}>
          <div className={styles.card}>
            <h3 className={styles.card_heading}>
              What do I need to get started?
            </h3>
            <p className={styles.card_paragraph}>
              To get started, simply share your project details and goals with
              us. We'll guide you through the process and provide the tools and
              support needed to bring your vision to life.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card_heading}>
              What kind of customization is available?
            </h3>
            <p className={styles.card_paragraph}>
              We offer full customization options, including layout changes,
              color schemes, typography, and content sections to align with your
              brand.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card_heading}>
              How easy is it to edit for beginners?
            </h3>
            <p className={styles.card_paragraph}>
              Our platform is designed with beginners in mind, offering an
              intuitive drag-and-drop interface that makes editing simple and
              straightforward. No coding skills required—just customize and go?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
