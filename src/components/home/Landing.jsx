import React from "react";
import styles from "../../styles/home/Landing.module.css";
import landing_video from "../../assets/landing_bg.mp4";
import clients_img from "../../assets/clients_strip.webp";
import hero_img from "../../assets/nitika_mam.webp";
import { shine } from "../../assets/icons";
import { Link, NavLink } from "react-router-dom";
import { EmblaCarousel } from "../EmblaCarousel";

function Landing() {
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <h1 className={styles.heading}>
          Empowering innovation, Igniting masterminds
        </h1>
        <p className={styles.paragraph}>
          Building the bridge from potential to performance through innovation
          and industry-driven learning
        </p>
        <div className={styles.cta_ctr}>
          <NavLink to="/contact" className={styles.primary_btn}>
            Connect with us
          </NavLink>
          <Link to="/about" className={styles.secondary_btn}>
            What is Entangle?
          </Link>
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
        <div className={styles.img_ctr}>
          {shine}
          {/* <img className={styles.hero_image} src={hero_img} alt="" /> */}
          <EmblaCarousel />
          <div className={styles.blur}></div>
        </div>
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
