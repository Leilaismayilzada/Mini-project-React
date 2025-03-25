import React from "react";
import styles from "./HomeSlider.module.scss";
import GradientButton from "../ButtonGradient";

const HomeSlider = ({
  backgroundImage,
  title,
  gradient,
  buttonText,
  icons,
  description,
}) => (
  <div
    className={styles.heroSlide}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className={styles.overlay}>
      <h1 className={styles.title}>
        {title}
        <br />
        <span className={styles.gradient}>{gradient}</span>
      </h1>
    
<GradientButton>{buttonText}</GradientButton>
      <div className="flex flex-row">
        <div className={styles.info}>
          <div className={styles.desc}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              width="64"
              height="64"
              className="text-white"
            >
              <path d="M22.434 3.18263H19.5949L18.7709 1.26459C18.4411 0.496625 17.6868 0 16.8504 0H9.1496C8.31318 0 7.56015 0.496625 7.22907 1.26459L6.40509 3.18263H3.56599C1.59941 3.18263 0 4.78204 0 6.74863V18.9116C0 20.8782 1.59941 22.4776 3.56599 22.4776H22.434C24.4006 22.4776 26 20.8782 26 18.9116V6.74863C26 4.78204 24.4006 3.18263 22.434 3.18263ZM24.5064 12.0833H22.1714C21.7594 12.0833 21.4246 12.4181 21.4246 12.8301C21.4246 13.2421 21.7594 13.5769 22.1714 13.5769H24.5064V18.9116C24.5064 20.0542 23.5766 20.984 22.434 20.984H3.56599C2.42338 20.984 1.49361 20.0542 1.49361 18.9116V13.5769H3.82862C4.24061 13.5769 4.57542 13.2421 4.57542 12.8301C4.57542 12.4181 4.24061 12.0833 3.82862 12.0833H1.49361V6.74863C1.49361 5.60601 2.42338 4.67624 3.56599 4.67624H22.434C23.5766 4.67624 24.5064 5.60601 24.5064 6.74863V12.0833ZM9.1496 1.49361H16.8504C17.0894 1.49361 17.3047 1.6355 17.3981 1.85456L17.9694 3.18263H8.03064L8.60194 1.85456C8.69654 1.6355 8.91062 1.49361 9.1496 1.49361Z" />
            </svg>
            <div className="flex flex-col">
              <h3 className={styles.desctitle}>Easy To Use</h3>
              <p className={styles.desctext}>{description}</p>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.desc}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              width="64"
              height="64"
              className="text-white"
            >
              <path d="M22.434 3.18263H19.5949L18.7709 1.26459C18.4411 0.496625 17.6868 0 16.8504 0H9.1496C8.31318 0 7.56015 0.496625 7.22907 1.26459L6.40509 3.18263H3.56599C1.59941 3.18263 0 4.78204 0 6.74863V18.9116C0 20.8782 1.59941 22.4776 3.56599 22.4776H22.434C24.4006 22.4776 26 20.8782 26 18.9116V6.74863C26 4.78204 24.4006 3.18263 22.434 3.18263ZM24.5064 12.0833H22.1714C21.7594 12.0833 21.4246 12.4181 21.4246 12.8301C21.4246 13.2421 21.7594 13.5769 22.1714 13.5769H24.5064V18.9116C24.5064 20.0542 23.5766 20.984 22.434 20.984H3.56599C2.42338 20.984 1.49361 20.0542 1.49361 18.9116V13.5769H3.82862C4.24061 13.5769 4.57542 13.2421 4.57542 12.8301C4.57542 12.4181 4.24061 12.0833 3.82862 12.0833H1.49361V6.74863C1.49361 5.60601 2.42338 4.67624 3.56599 4.67624H22.434C23.5766 4.67624 24.5064 5.60601 24.5064 6.74863V12.0833ZM9.1496 1.49361H16.8504C17.0894 1.49361 17.3047 1.6355 17.3981 1.85456L17.9694 3.18263H8.03064L8.60194 1.85456C8.69654 1.6355 8.91062 1.49361 9.1496 1.49361Z" />
            </svg>
            <div className="flex flex-col">
              <h3 className={styles.desctitle}>Easy To Use</h3>
              <p className={styles.desctext}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeSlider;
