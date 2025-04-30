import React from "react";
import styles from "../../styles/home/Showcase.module.css";
import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";
import company_1 from "../../assets/com_logo/iit_indore.png";
import company_2 from "../../assets/com_logo/medicaps.png";
import company_3 from "../../assets/com_logo/sage.png";
import company_4 from "../../assets/com_logo/symbiosis.png";

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
          <PrimaryBtn title="Book a 15-min call" />
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
              src="https://www.iiti.ac.in/public/storage/pages/September2022/IMG_5256%20(1).JPG"
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img
                src={company_1}
                alt="Logo"
                className={styles.logo}
                width="100px"
              />
              <span className={styles.showcase_heading}>
                IIT Indore – Tech Symposium 2024
              </span>
              <p className={styles.showcase_paragraph}>
                The Entangle collaborated with IIT Indore to host a dynamic tech
                symposium focused on innovation, AI.
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
              src="https://conference.medicaps.ac.in/static/media/newImage1.44f1c0d2e7329160e5cf.jpg"
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img
                src={company_2}
                alt="Logo"
                className={styles.logo}
                width="100px"
              />
              <span className={styles.showcase_heading}>
                Medi-Caps University - IEEE Conference
              </span>
              <p className={styles.showcase_paragraph}>
                Co-hosted IEEE conference on AI and tech innovations with expert
                keynotes and paper presentations.
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
              src="https://images.shiksha.com/mediadata/images/1522666975phpBeIurs.png"
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img
                src={company_3}
                alt="Logo"
                className={styles.logo}
                width="100px"
              />
              <span className={styles.showcase_heading}>
                Sage University Indore
              </span>
              <p className={styles.showcase_paragraph}>
                Conducted full-stack development bootcamp with live project
                demos and student mentorship sessions.
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
              src="https://www.suas.ac.in/wp-content/uploads/2022/01/Symbiosis-University-Indore-Campus.jpg"
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img
                src={company_4}
                alt="Logo"
                className={styles.logo}
                width="100px"
              />
              <span className={styles.showcase_heading}>
                Symbiosis Institute
              </span>
              <p className={styles.showcase_paragraph}>
                Motivational leadership talk encouraging youth to innovate,
                lead, and embrace change
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
