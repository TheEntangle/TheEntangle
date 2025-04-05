import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <a className={styles.logo} href="#">
            The Entangle
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
            <input className={styles.input} type="email" placeholder="Email address" />
            <button className={styles.primary_btn}>Subscribe Us</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.links_ctr}>
            <span className={styles.link_heading}>Main Pages</span>
            <ul className={styles.links_ctr}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.links_ctr}>
            <span className={styles.link_heading}>Social</span>
            <ul className={styles.links_ctr}>
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
