import React from "react";
import styles from "../../styles/home/Landing.module.css";
import landing_video from "../../assets/landing_bg.mp4";
import clients_img from "../../assets/clients_strip.webp"

function Landing() {
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <h1 className={styles.heading}>
          Empowering innovation, Igniting masterminds
        </h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit explicabo unde animi quo? Cumque, impedit!
        </p>
        <div className={styles.cta_ctr}>
          <a href="" className={styles.primary_btn}>
            Connect with us
          </a>
          <a href="" className={styles.secondary_btn}>
            What is Entangle?
          </a>
        </div>
        <div className={styles.logo_ctr}>
          <div className={styles.slider}>
            <img
              src={clients_img}
              alt="our clients"
              className={styles.slider_item}
            />
            <img
              src={clients_img}
              alt="our clients"
              className={styles.slider_item}
            />
            <img
              src={clients_img}
              alt="our clients"
              className={styles.slider_item}
            />
            <img
              src={clients_img}
              alt="our clients"
              className={styles.slider_item}
            />
          </div>
        </div>
      </div>
      <div className={styles.c2}>
        <img
          className={styles.hero_image}
          src="https://framerusercontent.com/images/E0x0I4RsxTtlOxSaM5UuuBvwbg0.jpeg?scale-down-to=1024&lossless=1"
          alt=""
        />
      </div>
      <video
        className={styles.landing_bg}
        src={landing_video}
        loop
        autoPlay
        muted
      ></video>
    </section>
  );
}

export default Landing;
