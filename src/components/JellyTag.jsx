import React from "react";
import styles from "../styles/JellyTag.module.css"

function JellyTag(props) {
  return (
    <span className={styles.jelly_tag}>
      <div className={styles.dot}></div>{props.title}
    </span>
  );
}

export default JellyTag;
