import React from "react";
import styles from "../styles/PrimaryBtn.module.css"

function PrimaryBtn(props) {
  return (
    <a href="#" className={styles.cta_btn}>
      {props.title}
    </a>
  );
}

export default PrimaryBtn;
