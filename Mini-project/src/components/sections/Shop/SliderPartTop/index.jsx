import React from 'react';
import SliderMain from '../../../shared/SliderMain';
import { QueryKeys } from '../../../constant/QueryKeys';
import { getAPIData } from '../../../../http/api';
import { useQuery } from '@tanstack/react-query';


const SliderPartTop = () => {
    const { data } = useQuery({
        queryKey: [QueryKeys.PRODUCTSLIDERSECTION],
        queryFn: () => getAPIData("product-slider-sections?populate=*")
      });
  return (
    <div>
    
     <SliderMain
     slides={data?.map((el) => ({
       image: el.image?.url
         ? `http://localhost:1337${el.image.url}`
         : "https://via.placeholder.com/150",
       title: el.title || "Untitled",
     }))}
   />

    </div>
  );
};

export default SliderPartTop;


