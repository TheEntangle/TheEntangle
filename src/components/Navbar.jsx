import React from 'react'
import styles from "../styles/Navbar.module.css"

import PrimaryBtn from "./PrimaryBtn"

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo_ctr}>
            <a href="/">TheEntangle</a>
        </div>
        <ul className={styles.nav_links}>
            <li><a href="#" className={styles.active}>Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">About</a></li>
            {/* <li><a href="#">Contact</a></li> */}
        </ul>
        <div className={styles.cta_ctr}>
          <PrimaryBtn title="Contact us"/>
        </div>
    </nav>
  )
}

export default Navbar