import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../../../shared/HomeSlider/HomeSlider";
import HomeSlider from '../../../shared/HomeSlider/HomeSlider';

const HomeSliderSection = () => {
  const slides = [
    {
      backgroundImage: "https://evoluxia-theme.myshopify.com/cdn/shop/files/Rectangle_42613_f1c28ce2-1d94-45a6-bd48-a3511e2cc83d.png?v=1706676677&width=1070",
      title: "Artificial Intelligence",
      gradient: "Creativity",
      buttonText: "Get Started",
      icons: [
        "M16.9,65.1c0,3.2,1.7,6,4.3,7.6c-1.1,1.5-1.7,3.3-1.7,5.3c0,3.5,2.1,6.6,5.1,8c-0.9,1.4-1.5,3.1-1.5,4.8c0,4.9,4,8.8,8.8,8.8H64...", // First Icon
        "M22.434 3.18263H19.5949L18.7709 1.26459C18.4411 0.496625 17.6868 0 16.8504 0H9.1496C8.31318 0 7.56015 0.496625 7.22907 1.26459L6.40509 3.18263H3.56599..." // Second Icon
      ],
      description: "Hendrerit gravida rutrum quisque non tellus orci ac."
    },
    {
      backgroundImage: "https://evoluxia-theme.myshopify.com/cdn/shop/files/Rectangle_42613_e30ca8b0-b102-4b10-a33d-3c674a5acf7e.png?v=1706615819&width=1500",
      title: "AI Image",
      gradient: "Generator",
      buttonText: "Start Creating",
      icons: [
        "M22.434 3.18263H19.5949L18.7709 1.26459C18.4411 0.496625 17.6868 0 16.8504 0H9.1496C8.31318 0 7.56015 0.496625 7.22907 1.26459L6.40509 3.18263H3.56599...",
        "M16.9,65.1c0,3.2,1.7,6,4.3,7.6c-1.1,1.5-1.7,3.3-1.7,5.3c0,3.5,2.1,6.6,5.1,8c-0.9,1.4-1.5,3.1-1.5,4.8c0,4.9,4,8.8,8.8,8.8H64..."
      ],
      description: "Generate visuals in seconds."
    },
    {
      backgroundImage: "https://evoluxia-theme.myshopify.com/cdn/shop/files/Rectangle_42614.png?v=1706615818&width=1070",
      title: "Unleash The Power Of AI",
      gradient: "Generators",
      buttonText: "Explore Now",
      icons: [
        "M16.9,65.1c0,3.2,1.7,6,4.3,7.6c-1.1,1.5-1.7,3.3-1.7,5.3c0,3.5,2.1,6.6,5.1,8c-0.9,1.4-1.5,3.1-1.5,4.8c0,4.9,4,8.8,8.8,8.8H64...",
        "M22.434 3.18263H19.5949L18.7709 1.26459C18.4411 0.496625 17.6868 0 16.8504 0H9.1496C8.31318 0 7.56015 0.496625 7.22907 1.26459L6.40509 3.18263H3.56599..."
      ],
      description: "Perfect for teams and creators."
    }
  ];

  return (
    <div className={styles.sliderWrapper}>
      <Swiper className={styles.swiper} spaceBetween={0} slidesPerView={1} loop={false} grabCursor={true}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HomeSlider {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliderSection;
