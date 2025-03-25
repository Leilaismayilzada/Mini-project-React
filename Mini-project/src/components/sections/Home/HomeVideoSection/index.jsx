import React, { useRef, useState } from "react";
import style from "./style.module.scss";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  const handleVideoEnd = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play(); 
    }
  };

  return (
    <div className={style.videoWrapper}>
      <video
        ref={videoRef}
        src="https://cdn.shopify.com/videos/c/o/v/063e96a7adc24f948c697191ab09ab46.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className={style.video}
      ></video>

      <button onClick={togglePlay} className={style.toggleButton}>
        {isPaused ? "PLAY" : "PAUSE"}
      </button>
    </div>
  );
};

export default HeroVideo;
