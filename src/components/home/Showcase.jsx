import React from "react";
import styles from "../../styles/home/Showcase.module.css";
import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";
import company_1 from "../../assets/com_logo/iit_indore.png"

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
            A glimpse into our journey of innovation, collaboration, and
            growth—captured in action!
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
              <img src={company_1} alt="Logo" className={styles.logo} width="100px" />
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
              src="https://framerusercontent.com/images/JCaZzme2XYHwWAWbEWjb3W3WpE.jpeg"
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img src="" alt="Logo" className={styles.logo} />
              <span className={styles.showcase_heading}>Raven Company Inc</span>
              <p className={styles.showcase_paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, suscipit?
              </p>
              <div className={styles.jelly_tag_ctr}>
                <span className={styles.jelly_tag}>20% Conversion Rates</span>
                <span className={styles.jelly_tag}>50% Reduced in CPA</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.showcase_card}>
          <div className={styles.showcase_img_ctr}>
            <img
              className={styles.showcase_img}
              src="https://framerusercontent.com/images/JCaZzme2XYHwWAWbEWjb3W3WpE.jpeg"
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img src="" alt="Logo" className={styles.logo} />
              <span className={styles.showcase_heading}>Raven Company Inc</span>
              <p className={styles.showcase_paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, suscipit?
              </p>
              <div className={styles.jelly_tag_ctr}>
                <span className={styles.jelly_tag}>20% Conversion Rates</span>
                <span className={styles.jelly_tag}>50% Reduced in CPA</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.showcase_card}>
          <div className={styles.showcase_img_ctr}>
            <img
              className={styles.showcase_img}
              src="https://framerusercontent.com/images/JCaZzme2XYHwWAWbEWjb3W3WpE.jpeg"
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              <img src="" alt="Logo" className={styles.logo} />
              <span className={styles.showcase_heading}>Raven Company Inc</span>
              <p className={styles.showcase_paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, suscipit?
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
