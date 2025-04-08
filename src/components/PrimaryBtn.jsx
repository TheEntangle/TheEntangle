import React from "react";
import styles from "../styles/PrimaryBtn.module.css"
import { Link } from "react-router-dom";

function PrimaryBtn(props) {
  return (
    <Link to={props.path} className={styles.cta_btn}>
      {props.title}
    </Link>
  );
}

export default PrimaryBtn;
