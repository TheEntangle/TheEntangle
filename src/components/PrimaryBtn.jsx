import React from "react";
import styles from "../styles/PrimaryBtn.module.css";
import { Link, useLocation } from "react-router-dom";

function PrimaryBtn(props) {
  const location = useLocation();

  const handleClick = (e) => {
    // Check if the current path matches the target path
    if (location.pathname === props.path) {
      e.preventDefault(); // Prevent navigation
      
      // Scroll down by a specified amount (you can adjust this value)
      window.scrollBy({
        top: 300, // Scroll down by 300px
        behavior: 'smooth' // Smooth scrolling animation
      });
    }
    // If paths don't match, let the Link component handle normal navigation
  };

  return (
    <Link 
      to={props.path} 
      className={styles.cta_btn}
      onClick={handleClick}
    >
      {props.title}
    </Link>
  );
}

export default PrimaryBtn;