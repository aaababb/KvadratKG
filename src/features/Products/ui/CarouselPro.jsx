import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import product from '../../../shared/assets/img/product.png'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function CarouselPro() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='h-[207px]' src={product}/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[207px]' src={product}/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[207px]' src={product}/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[207px]' src={product}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
