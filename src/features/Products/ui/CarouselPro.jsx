import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import product from "../../../shared/assets/img/product.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./CarouselPro.css";

export default function CarouselPro({ images }) {
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
        {images?.map(({ image }, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[200px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={image ? image : product}
                alt="Photos"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
