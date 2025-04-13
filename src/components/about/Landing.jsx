import React from 'react'
import styles from "../../styles/about/Landing.module.css"

import PrimaryBtn from "../PrimaryBtn";

import landing_video from "../../assets/landing_bg.mp4";

function Landing() {
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <h1 className={styles.heading}>
        Learn More About Entangle
          <br />
          Let’s Deep Dive!
        </h1>
        <p className={styles.paragraph}>
        Landin is your go-to agency for creative thinking and 
        marketing ideas. We specialize in digital business solutions.
        </p>
        <PrimaryBtn title="Connect with us" />
      </div>

      <video
        className={styles.landing_bg}
        src={landing_video}
        loop
        autoPlay
        muted
      ></video>
    </section>
  )
}

export default Landing