import React from "react";
import styles from "../styles/PrimaryBtn.module.css";
import { Link, NavLink } from "react-router-dom";

function PrimaryBtn(props) {
  return (
    <NavLink to={props.path} className={styles.cta_btn}>
      {props.title}
    </NavLink>
  );
}

export default PrimaryBtn;
