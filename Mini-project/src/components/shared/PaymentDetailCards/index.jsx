import React from "react";
import { Check, X } from "lucide-react";
import style from "./style.module.scss";

const PlanCard = ({ icon, price, title, description, features, className = "" }) => {
  return (
    <div className={`${style.planCard} ${className}`}>
      <div className={style.planIcon}>
        <img src={icon} alt="plan icon" />
      </div>
      <h2 className={style.planPrice}>{price}</h2>
      <p className={style.planDesc}>{title}</p>
      {description && <p className={style.planNote}>{description}</p>}

      <h3 className={style.planFeatureHeading}>Features:</h3>
      <ul className={style.planFeatureList}>
        {features.map((feature, index) => (
          <li key={index} className={style.planFeatureItem}>
            {feature.included ? (
              <Check size={18} color="#99da93" />
            ) : (
              <X size={18} color="#777" />
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
