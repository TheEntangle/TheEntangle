import React from "react";
import styles from "../../styles/home/Showcase.module.css";
import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";

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
          <h1 className={styles.heading}>Delivering Tangible Results</h1>

          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            maiores fugit nisi totam delectus doloribus!
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