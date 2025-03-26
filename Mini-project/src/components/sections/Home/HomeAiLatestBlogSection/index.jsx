import React from "react";
import BlogCard from "../../../shared/AiLatestCard";
import style from "../../../shared/AiLatestCard/style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../constant/QueryKeys";
import { getAPIData } from "../../../../http/api";

const HomeAiLatestBlogSection = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.AILASTESTCARDS],
    queryFn: () => getAPIData("ai-lastest-cards?populate=*")
  });
  console.log(data)

  return (
    <div className={style.section}>
      <div className="w-full bg-[#02070f]">
        <div className="text-center py-10">
          <span className="text-[#717171] inline-flex items-center justify-center mb-2 uppercase tracking-wide text-sm">
            DAILY UPDATES
          </span>
          <h2 className="text-white text-3xl font-bold">Latest AI Blog</h2>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3">
        {data?.map((el, index) => (
          <BlogCard
            key={index}
            date={el.date}
            image={el.image[0]?.url 
              ? `http://localhost:1337${el.image[0].url}` 
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
      <BlogCard
        date={el.date}
        image={
          el.image[0]?.url
            ? `http://localhost:1337${el.image[0].url}`
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
    </div>
  );
};


   

export default HomeAiLatestBlogSection;
