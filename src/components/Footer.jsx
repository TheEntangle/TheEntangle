import React from "react";
import styles from "../styles/Footer.module.css";
import JellyTag from "./JellyTag";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <a className={styles.logo} href="#">
            <img src={logo} alt="" />
          </a>
          <span className={styles.credit}>
            Made with 💙 by <strong>Arin Bagul</strong> <br /> from{" "}
            <strong>
              <u>
                <a href="https://zenvoyager.in" target="_blank">
                  ZenVoyager.in
                </a>
              </u>
            </strong>
          </span>
          <div className={styles.input_ctr}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email address"
            />
            <button className={styles.primary_btn}>Subscribe Us</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.links_ctr}>
            <span className={styles.link_heading}>Main Pages</span>
            <ul className={styles.links_list}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.links_ctr}>
            <span className={styles.link_heading}>Social</span>
            <ul className={styles.links_list}>
              <li>
                <a href="">Twitter (X)</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </div>
          <div className={styles.project_count_ctr}>
            <JellyTag title="Project Completed - 40" />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright_ctr}>
          <a className={styles.copyright_link} href="#">
            © 2025 The Entangle
          </a>
        </div>
        <div className={styles.policy_ctr}>
          <a className={styles.policy_link} href="#">
            Terms & Conditions
          </a>
          <a className={styles.policy_link} href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
