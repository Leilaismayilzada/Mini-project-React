import React from "react";
import HeroCharacters from "../../../shared/HeroCharacters";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../constant/QueryKeys";
import { getAPIData } from "../../../../http/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const HomeHeroCharactersSection = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.HEROCHARACTERS],
    queryFn: () => getAPIData("hero-characters?populate=*"),
  });



  return (
    <div className="bg-[#02070f] mt-[40px]">
  
  <div className="hidden md:grid grid-cols-1 md:grid-cols-5">
        {data?.map((el, index) => (
          <HeroCharacters
            key={index}
            date={el.date}
            image={el.image?.url 
              ? `http://localhost:1337${el.image.url}` 
              : "https://via.placeholder.com/150"}
            
            title={el.title}
            description={el.description}
          />
        ))}
        </div>
        <div className="md:hidden">
        <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 2500 }}
  pagination={{ clickable: true }}
  loop={true}
  spaceBetween={16}
  slidesPerView={1}
>
  {data?.map((el, index) => (
    <SwiperSlide key={index}>
      <HeroCharacters
        date={el.date}
        image={
          el.image?.url
            ? `http://localhost:1337${el.image.url}`
            : "https://via.placeholder.com/150"
        }
        title={el.title}
        description={el.description}
      />
    </SwiperSlide>
  ))}
</Swiper>

        </div>
    </div>
  );
};

export default HomeHeroCharactersSection;
