import React from "react";
import styles from "../../styles/home/Portfolio.module.css";

import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";

function Portfolio() {
  return (
    <section className={styles.portfolio_section}>
      <div className={styles.portfolio_section_div}>
        <div className={styles.head_ctr}>
          <div
            className={`${styles.element_details_ctr_left} ${styles.element_details_ctr}`}
          >
            <img
              className={`${styles.element_details_left_img} ${styles.element_details_img}`}
              src={element_details}
              alt=""
            />
          </div>
          <div className={styles.head_content_ctr}>
            <JellyTag title="Portfolio" />
            <h1 className={styles.heading}>
              Our Selected Projects <br />
              <span>That Propel Your Website.</span>
            </h1>

            <p className={styles.paragraph}>
              Explore our curated work, showcasing collaborations with visionary
              clients across diverse industries.
            </p>
            <PrimaryBtn title="View Portfolio" />
          </div>
          <div
            className={`${styles.element_details_ctr_right} ${styles.element_details_ctr}`}
          >
            <img
              className={`${styles.element_details_right_img} ${styles.element_details_img}`}
              src={element_details}
              alt=""
            />
          </div>
        </div>

        <div className={styles.project_cards_ctr}>
            <div className={styles.project_card}>
                <img className={styles.project_img} src="https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg" alt="" />
                <div className={styles.content_ctr}>
                  <div className={styles.left_content_ctr}>
                    <span className={styles.project_title}>Way Fields</span>
                    <span className={styles.dot}></span>
                    <span className={styles.project_date}>2024</span>
                  </div>
                  <div className={styles.right_content_ctr}>
                    <span className={styles.project_tag}>E-Commerce</span>
                    <span className={styles.project_tag}>Portfolio</span>
                  </div>
                </div>
            </div>
            <div className={styles.project_card}>
                <img className={styles.project_img} src="https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg" alt="" />
                <div className={styles.content_ctr}>
                  <div className={styles.left_content_ctr}>
                    <span className={styles.project_title}>Way Fields</span>
                    <span className={styles.dot}></span>
                    <span className={styles.project_date}>2024</span>
                  </div>
                  <div className={styles.right_content_ctr}>
                    <span className={styles.project_tag}>E-Commerce</span>
                    <span className={styles.project_tag}>Portfolio</span>
                  </div>
                </div>
            </div>
            <div className={styles.project_card}>
                <img className={styles.project_img} src="https://framerusercontent.com/images/R3IeKTraEFrwLqAUS320AzD0uY.jpg" alt="" />
                <div className={styles.content_ctr}>
                  <div className={styles.left_content_ctr}>
                    <span className={styles.project_title}>Way Fields</span>
                    <span className={styles.dot}></span>
                    <span className={styles.project_date}>2024</span>
                  </div>
                  <div className={styles.right_content_ctr}>
                    <span className={styles.project_tag}>E-Commerce</span>
                    <span className={styles.project_tag}>Portfolio</span>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
