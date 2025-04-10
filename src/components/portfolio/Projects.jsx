import React from 'react'
import styles from "../../styles/portfolio/Projects.module.css"

function Projects() {
  return (
    <section className={styles.project_section}>
        <div className={styles.cards_ctr}>
        <div className={styles.card}>
            <div className={styles.image_ctr}>
                <img className={styles.image} src="https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg" alt="" />
            </div>
            <div className={styles.content_ctr}>
                <span className={styles.title}>Way Fields</span>
                <span className={styles.date}>2024</span>
            </div>
            <div className={styles.tag}>
                <span>E-Commerce</span>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.image_ctr}>
                <img className={styles.image} src="https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg" alt="" />
            </div>
            <div className={styles.content_ctr}>
                <span className={styles.title}>Way Fields</span>
                <span className={styles.date}>2024</span>
            </div>
            <div className={styles.tag}>
                <span>E-Commerce</span>
            </div>
        </div></div>
    </section>
  )
}

export default Projects