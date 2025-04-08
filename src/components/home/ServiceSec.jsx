import React from "react";
import styles from "../../styles/home/ServiceSec.module.css";
import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";
import service_icon_1 from "../../assets/service_icon_1.svg";
import cta_arrow from "../../assets/cta_arrow.svg";

function ServiceSec() {
  return (
    <section className={styles.services_section}>
      <div className={styles.services_section_div}>
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
            <JellyTag title="Services" />
            <h1 className={styles.heading}>
              Ultimated design features
              <br />
              <span>delivered in a second!</span>
            </h1>

            <p className={styles.paragraph}>
              Get unlimited design features that give you the freedom to create
              without boundaries.
            </p>
            <PrimaryBtn title="Explore services" />
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
        <div className={styles.cards_ctr}>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={service_icon_1} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>Boost your revenue</h4>
              <span className={styles.card_heading_2}>Increase Profit</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                Unlock new revenue streams with data-driven strategies and
                marketing.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={service_icon_1} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>Boost your revenue</h4>
              <span className={styles.card_heading_2}>Increase Profit</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                Unlock new revenue streams with data-driven strategies and
                marketing.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon}>
                <img src={service_icon_1} alt="" />
              </div>
              <div className={styles.cta}>
                <img src={cta_arrow} alt="" />
              </div>
            </div>
            <div className={styles.card_heading_ctr}>
              <h4 className={styles.card_heading_1}>Boost your revenue</h4>
              <span className={styles.card_heading_2}>Increase Profit</span>
            </div>
            <div className={styles.card_paragraph_ctr}>
              <p className={styles.card_paragraph}>
                Unlock new revenue streams with data-driven strategies and
                marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSec;
