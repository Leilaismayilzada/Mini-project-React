import React from "react";
import styles from "./GradientButton.module.scss";
import { Link } from "react-router-dom";

const GradientButton = ({ children, onClick, type = "button", to, className = "" }) => {
  if (to) {
    return (
      <Link to={to} className={`${styles.button} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default GradientButton;
