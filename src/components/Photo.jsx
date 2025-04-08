import React from 'react'
import styles from "../styles/Photo.module.css"

function Photo(props) {
    
  return (
    <div className={styles.photo_ctr}>
        <img className={styles.photo} src={props.image} alt="" />
    </div>
  )
}

export default Photo