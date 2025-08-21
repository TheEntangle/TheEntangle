import React from 'react'
import styles from "../../styles/about/Awards.module.css";
import JellyTag from "../JellyTag"

function Awards() {
  return (
    <section className={styles.awards_section}>
      <div className={styles.left}>
        <div className={styles.heading_ctr}>
          <JellyTag title="Awards" />
          <h2 className={styles.heading}>
            Awards <br />
            <span>& Recognition</span>
          </h2>
          <p className={styles.paragraph}>
            We’re proud to have been recognized with several awards for our hard work and dedication.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.cards_ctr}>

          <div className={styles.card}>

            <div className={styles.image_ctr}>
              <img className={styles.certificate_image} src="https://m.media-amazon.com/images/I/71hI16-vr6L.jpg" alt="certificate" />
            </div>

            <div className={styles.info_ctr}>
              <h3 className={styles.card_heading}>
                Best Innovation Award 2023
              </h3>
              <p className={styles.card_paragraph}>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className={styles.card}>

            <div className={styles.image_ctr}>
              <img className={styles.certificate_image} src="https://m.media-amazon.com/images/I/71hI16-vr6L.jpg" alt="certificate" />
            </div>

            <div className={styles.info_ctr}>
              <h3 className={styles.card_heading}>
                Best Innovation Award 2023
              </h3>
              <p className={styles.card_paragraph}>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className={styles.card}>

            <div className={styles.image_ctr}>
              <img className={styles.certificate_image} src="https://m.media-amazon.com/images/I/71hI16-vr6L.jpg" alt="certificate" />
            </div>

            <div className={styles.info_ctr}>
              <h3 className={styles.card_heading}>
                Best Innovation Award 2023
              </h3>
              <p className={styles.card_paragraph}>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className={styles.card}>

            <div className={styles.image_ctr}>
              <img className={styles.certificate_image} src="https://m.media-amazon.com/images/I/71hI16-vr6L.jpg" alt="certificate" />
            </div>

            <div className={styles.info_ctr}>
              <h3 className={styles.card_heading}>
                Best Innovation Award 2023
              </h3>
              <p className={styles.card_paragraph}>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Awards