import React from 'react'
import styles from "../styles/TheEdge.module.css"
import theEdge from '../assets/theEdge.png'

function TheEdge() {
  return (
    <div className={styles.the_edge}>
        <img className={styles.breaker} src={theEdge} alt="" />
    </div>
  )
}

export default TheEdge