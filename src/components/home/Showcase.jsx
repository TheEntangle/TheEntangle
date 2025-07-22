import React from "react";
import styles from "../../styles/home/Showcase.module.css";
import JellyTag from "../JellyTag";
import PrimaryBtn from "../PrimaryBtn";
import element_details from "../../assets/element_1.svg";

import class_photo_1 from "../../assets/event_photos/1.jpg"
import class_photo_2 from "../../assets/event_photos/2.jpg"
import class_photo_3 from "../../assets/event_photos/3.jpg"
import class_photo_4 from "../../assets/event_photos/4.jpg"
import class_photo_5 from "../../assets/event_photos/5.jpg"
import class_photo_6 from "../../assets/event_photos/6.jpg"
import class_photo_8 from "../../assets/event_photos/8.jpg"
import class_photo_9 from "../../assets/event_photos/9.jpg"
import class_photo_10 from "../../assets/event_photos/10.jpg"
import class_photo_11 from "../../assets/event_photos/11.jpg"
import class_photo_12 from "../../assets/event_photos/12.jpg"


function Showcase() {
  const photos = [
    class_photo_9,
    class_photo_10,
    class_photo_11,
    class_photo_12,
    class_photo_1,
    class_photo_2,
    class_photo_3,
    // class_photo_4,
    class_photo_5,
    // class_photo_6,
    // class_photo_8,
  ]

  

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

        {photos.map((photo, index) => (

          <div className={styles.showcase_card}>
          <div className={styles.showcase_img_ctr}>
            <img
              className={styles.showcase_img}
              src={photo}
              alt=""
            />
            <div className={styles.dark}></div>
            <div className={styles.showcase_content_ctr}>
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4D-JolKdQRJwAvRcQlFYozClAmClPMd42A&s"
                alt="Logo"
                className={styles.logo}
              /> */}
              <span className={styles.showcase_heading}>
                TAVISHI 1.0
              </span>
              <p className={styles.showcase_paragraph}>
                A successful event at SAGE University, Indore, where we engaged
                students with our innovative approach to education and
                entrepreneurship.
              </p>
              <div className={styles.jelly_tag_ctr}>
                <span className={styles.jelly_tag}>TechEvent</span>
                <span className={styles.jelly_tag}>Hackathon</span>
              </div>
            </div>
          </div>
        </div>

        ))}

        
        
      </div>
    </section>
  );
}

export default Showcase;
