import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import "../styles/Navbar.css";

import PrimaryBtn from "./PrimaryBtn";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const inputBtn = document.getElementById("input-btn");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    inputBtn.checked = !inputBtn.checked;
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_ctr}>
        <NavLink to="/">TheEntangle</NavLink>
      </div>
      <ul className={`${styles.nav_links} nav_links`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* <li>
          <Link to="/service">Service</Link>
        </li> */}
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {/* <li><a href="#">Contact</a></li> */}
      </ul>
      <div className={styles.cta_ctr}>
        <PrimaryBtn title="Contact us" path="/contact" />
      </div>

      <div className={styles.menu_toggle}>
        <label className={styles.hamburger}>
          <input id="input-btn" onClick={toggleMenu} type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              className={`${styles.line} ${styles.line_top_bottom}`}
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className={styles.line} d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>

      <ul
        className={`${styles.nav_links_mob} ${
          isMenuOpen ? "active" : ""
        } nav_links_mob`}
        id="nav_menu_links_mob"
      >
        <li onClick={closeMenu}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink to="/projects">Portfolio</NavLink>
        </li>

        <li onClick={closeMenu}>
          <div className={styles.cta_ctr_mob}>
            <PrimaryBtn title="Contact us" path="/contact" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
