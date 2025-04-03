import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from './style.module.scss';

export default function SliderMain({ slides = [] }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  
    return (
   <div className={styles.container}>
       <div className={styles.sliderWrapper}>
        <div className={styles.navButtons}>
          <button ref={prevRef} className={styles.prevBtn}>←</button>
          <button ref={nextRef} className={styles.nextBtn}>→</button>
        </div>
  
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <img
                  src={slide.image || '/placeholder.jpg'}
                  alt={slide.title || 'Untitled'}
                  className={styles.image}
                />
                <h3 className={styles.title}>{slide.title || 'Untitled'}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
   </div>
    );
  }
  
