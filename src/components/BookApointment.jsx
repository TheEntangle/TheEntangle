import React from "react";
import styles from "../styles/BookApointment.module.css";
import landing_video from "../assets/landing_bg.mp4";
import JellyTag from "./JellyTag";
import PrimaryBtn from "./PrimaryBtn";

function BookApointment() {
  return (
    <section className={styles.booking_section}>
      <div className={styles.booking_card}>
        <JellyTag title="Join us now" />
        <h3 className={styles.heading} >
          Each Project we Undertake
          <br />
          <span>is a Unique Opportunity.</span>
        </h3>
        <p className={styles.paragraph} >
          Ready to take the next step? Join us now and start transforming your
          vision into reality with expert support.
        </p>
        <PrimaryBtn title="Book an Appointment" />
        <video
          className={styles.card_bg}
          src={landing_video}
          loop
          autoPlay
          muted
        ></video>
      </div>
    </section>
  );
}

export default BookApointment;
