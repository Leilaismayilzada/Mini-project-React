import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./StepSlider.module.scss"


const HomeRotateStepSlider = ({title,img,desc}) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
            <SwiperSlide>
              <div className={styles.card}>
                <img src={img} alt={title} className={styles.icon} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeRotateStepSlider;

