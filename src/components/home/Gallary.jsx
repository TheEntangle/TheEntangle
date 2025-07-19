import React from "react";
import styles from "../../styles/home/Gallary.module.css";
import Photo from "../Photo";

// import e_one from "../../assets/event_photos/e_one.webp"
// import e_two from "../../assets/event_photos/e_two.webp"
// import e_three from "../../assets/event_photos/e_three.webp"
// import e_four from "../../assets/event_photos/e_four.webp"
// import e_five from "../../assets/event_photos/e_five.webp"
// import e_six from "../../assets/event_photos/e_six.webp"
// import e_seven from "../../assets/event_photos/e_seven.webp"
// import e_eight from "../../assets/event_photos/e_eight.webp"
// import e_nine from "../../assets/event_photos/e_nine.webp"
// import e_ten from "../../assets/event_photos/e_ten.webp"

function Gallary() {
  const topImages = [e_one, e_two, e_three, e_four, e_five];
  const bottomImages = [e_six, e_seven, e_eight, e_nine, e_ten];

  return (
    <section className={styles.gallary_section}>
      <div className={styles.top}>
        <div className={styles.image_slide_ctr}>
          {[...topImages, ...topImages].map((img, i) => (
            <Photo key={`top-${i}`} image={img} />
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.image_slide_ctr} ${styles.reverse}`}>
          {[...bottomImages, ...bottomImages].map((img, i) => (
            <Photo key={`bottom-${i}`} image={img} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallary;
