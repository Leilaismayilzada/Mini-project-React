import React from "react";
import style from "./style.module.scss";
import HomeRotateStepSlider from '../../../shared/HomeRotateSliders/index';
import { QueryKeys } from "../../../constant/QueryKeys";
import { getAPIData } from "../../../../http/api";
import { useQuery } from "@tanstack/react-query";

import "swiper/css";

const RotateSlider = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.ROTATESTEPSLIDER],
    queryFn: () => getAPIData("home-rotate-step-sliders?populate=*"),
  });


  return (
    
    <div className="bg-[#02070f] py-10">
      <div className={style.container}>
        <div className={style.title}>
          Transforming Industry With Our <span className={style.span}>AI Generator</span> <br /> Agency Services.    Explore Creative 
          <br />
       Models With Our AI Power.
        </div>
        <div className={style.img}>
          <img src="https://evoluxia-theme.myshopify.com/cdn/shop/files/Layer_1_8.png?v=1702631611&width=1500" alt="" />
        </div>
        
        <HomeRotateStepSlider slides={data}/>

</div>
 </div>
  );
};

export default RotateSlider;
