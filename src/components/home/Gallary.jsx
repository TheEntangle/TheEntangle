import React from "react";
import styles from "../../styles/home/Gallary.module.css";
import Photo from "../Photo";

function Gallary() {
  return (
    <section className={styles.gallary_section}>
      <div className={styles.top}>
        <div className={styles.image_slide_ctr}>
          <Photo image="https://framerusercontent.com/images/pNsH0sjqpxKinvZVroSAVBVbHg.jpeg?scale-down-to=512" />
          <Photo image="https://framerusercontent.com/images/SnItNunxCc2X72Ksz4FHlytg4s.jpeg?scale-down-to=512" />
          <Photo image="https://framerusercontent.com/images/zI3YNUd5xC4BPbUXp3kr8zehkjk.jpeg?scale-down-to=512" />
          <Photo image="https://framerusercontent.com/images/50LwK19zfau8TR1mxekTXRGRLsk.jpeg?scale-down-to=512" />
          <Photo image="https://framerusercontent.com/images/cyHr7ekUefwWODr2jN4dsxKKbPk.jpeg?scale-down-to=1024" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.image_slide_ctr}>
          <Photo image="https://framerusercontent.com/images/pNsH0sjqpxKinvZVroSAVBVbHg.jpeg?scale-down-to=512" />
          <Photo image="https://framerusercontent.com/images/SnItNunxCc2X72Ksz4FHlytg4s.jpeg?scale-down-to=512" />
          <Photo image="https://framerusercontent.com/images/zI3YNUd5xC4BPbUXp3kr8zehkjk.jpeg?scale-down-to=512" />
          <Photo image="https://framerusercontent.com/images/50LwK19zfau8TR1mxekTXRGRLsk.jpeg?scale-down-to=512" />
          <Photo image="https://framerusercontent.com/images/cyHr7ekUefwWODr2jN4dsxKKbPk.jpeg?scale-down-to=1024" />
        </div>
      </div>
    </section>
  );
}

export default Gallary;
