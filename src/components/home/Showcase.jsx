import React from "react";
import styles from "../../styles/home/Showcase.module.css";
import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";
import company_1 from "../../assets/com_logo/iit_indore.png";
import company_2 from "../../assets/com_logo/medicaps.png";
import company_3 from "../../assets/com_logo/sage.png";
import company_4 from "../../assets/com_logo/symbiosis.png";
import company_5 from "../../assets/com_logo/ips.png";
import company_6 from "../../assets/com_logo/icfai.png";

import ips_event from "../../assets/showcase/ips_event.jpg"
import icfai_event from "../../assets/showcase/icfai_event.jpg"
import womensday_event from "../../assets/showcase/womensday_event.jpg"
import traingsession from "../../assets/showcase/traingsession.jpg"

function Showcase() {
  return (
    <section className={styles.showcase_section}>
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
          <JellyTag title="Results" />
          <h1 className={styles.heading}>The Entangle in Action</h1>

          <p className={styles.paragraph}>
            From inspiring talks to hands-on workshops, explore highlights from
            our recent events and experiences!
          </p>
          <PrimaryBtn path="/contact" title="Book a 15-min call" />
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
      <div className={styles.showcase_slides_ctr}>
        <div className={styles.showcase_card}>
          <div className={styles.showcase_img_ctr}>
            <img
              className={styles.showcase_img}
              src={ips_event}
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4D-JolKdQRJwAvRcQlFYozClAmClPMd42A&s"
                alt="Logo"
                className={styles.logo}
              />
              <span className={styles.showcase_heading}>
                IPS Academy
              </span>
              <p className={styles.showcase_paragraph}>
                Dr. Nitika vats from department of Training has been invited as chief-guest at IPS Academy, scheduled for February 7-8, 2025.
              </p>
              <div className={styles.jelly_tag_ctr}>
                <span className={styles.jelly_tag}>TechEvent</span>
                <span className={styles.jelly_tag}>InnovationSummit</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.showcase_card}>
          <div className={styles.showcase_img_ctr}>
            <img
              className={styles.showcase_img}
              src={icfai_event}
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/ICFAI_University_Tripura.png"
                alt="Logo"
                className={styles.logo}
              />
              <span className={styles.showcase_heading}>
                ICFAI University, Jaipur
              </span>
              <p className={styles.showcase_paragraph}>
                Delivered an invited talk and serve as a Session Chair at our conference, scheduled for February 6-7, 2025, at The ICFAI University, Jaipur.
              </p>
              <div className={styles.jelly_tag_ctr}>
                <span className={styles.jelly_tag}>IEEE2024</span>
                <span className={styles.jelly_tag}>ResearchDriven</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.showcase_card}>
          <div className={styles.showcase_img_ctr}>
            <img
              className={styles.showcase_img}
              src={womensday_event}
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img
                src="https://cdn.universitykart.com//Content/upload/admin/gjmrzjqu.jr1.jpg"
                alt="Logo"
                className={styles.logo}
              />
              <span className={styles.showcase_heading}>
                Sage University, Indore
              </span>
              <p className={styles.showcase_paragraph}>
                Being a woman is in itself a superpower!
And to celebrate this superpower, SAGE UNIVERSITY, INDORE, like every year, celebrated Women's Day
              </p>
              <div className={styles.jelly_tag_ctr}>
                <span className={styles.jelly_tag}>Bootcamp2024</span>
                <span className={styles.jelly_tag}>SkillUp</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.showcase_card}>
          <div className={styles.showcase_img_ctr}>
            <img
              className={styles.showcase_img}
              src={traingsession}
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLw2ytI3MFQ2OYY1tGQ4DBPW4jmt4lfDKTA&s"
                alt="Logo"
                className={styles.logo}
              />
              <span className={styles.showcase_heading}>
                Placement Training
              </span>
              <p className={styles.showcase_paragraph}>
                Placement oriented coding questions based on Sorting, searching and data structures
              </p>
              <div className={styles.jelly_tag_ctr}>
                <span className={styles.jelly_tag}>20% Conversion Rates</span>
                <span className={styles.jelly_tag}>50% Reduced in CPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
