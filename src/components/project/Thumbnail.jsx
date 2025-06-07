import React from 'react'
import styles from '../../styles/project/Thumbnail.module.css'

function Thumbnail() {
  return (
    <section className={styles.thumbnail_section}>
        <div className={styles.thumbnail_ctr}>
            <img className={styles.thumbnail_img} src="https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg" alt="" />
        </div>
    </section>
  )
}

export default Thumbnail