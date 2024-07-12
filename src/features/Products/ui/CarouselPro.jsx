import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import product from '../../../shared/assets/img/product.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import './CarouselPro.css'; 

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
          <img className='w-full ' src={product} alt="Product 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full ' src={product} alt="Product 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full ' src={product} alt="Product 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full ' src={product} alt="Product 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
