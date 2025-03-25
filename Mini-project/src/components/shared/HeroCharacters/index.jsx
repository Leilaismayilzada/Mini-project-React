import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiInstagramLine } from "react-icons/ri";
import "swiper/css";
import style from "./style.module.scss";

const HeroCharacters = ({ image, title }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.desktopGrid}>
        <div className={style.card}>
          <img src={image} alt="character" className={style.image} />
          <p className={style.title}>{title}</p>
          <div className={style.overlay}>
            <RiInstagramLine className={style.icon} />
          </div>
        </div>
      </div>

      <div className={style.mobileSlider}>
        <Swiper spaceBetween={0} slidesPerView={"auto"}>
          <SwiperSlide>
            <div className={style.card}>
              <img src={image} alt="character" className={style.image} />
              <p className={style.title}>{title}</p>
              <div className={style.overlay}>
                <RiInstagramLine className={style.icon} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroCharacters;
