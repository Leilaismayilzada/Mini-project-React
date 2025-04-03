import React from "react";
import style from "./style.module.scss";
import GradientButton from "../ButtonGradient";
import { useNavigate } from "react-router-dom";

const AiLatestCard = ({ image, date, title, description,id}) => {
  const navigate = useNavigate();

  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style.image} />
      <div className={style.overlay}>
        <i className="ri-calendar-2-line"></i>
        <p className={style.date}>{date}</p>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <GradientButton onClick={() => navigate(`/blogs/${id}`)}>
          Read More
        </GradientButton>      </div>
    </div>
  );
};

export default AiLatestCard;
