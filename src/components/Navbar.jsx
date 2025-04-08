import React from "react";
import styles from "../styles/Navbar.module.css";

import PrimaryBtn from "./PrimaryBtn";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_ctr}>
        <Link to="/">TheEntangle</Link>
      </div>
      <ul className={styles.nav_links}>
        <li>
          <Link to="/" className={styles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li><a href="#">Contact</a></li> */}
      </ul>
      <div className={styles.cta_ctr}>
        <PrimaryBtn title="Contact us" path="/contact" />
      </div>
    </nav>
  );
}

export default Navbar;
