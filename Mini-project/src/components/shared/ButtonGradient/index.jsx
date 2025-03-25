import React from "react";
import styles from "./GradientButton.module.scss";

const GradientButton = ({ children, onClick, type = "button" }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default GradientButton;
