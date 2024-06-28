import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../Banner";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
