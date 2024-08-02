import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CustomPrevButton from "./CustomPrevButton";
import CustomNextButton from "./CustomNextButton";
import img1 from "../../../shared/assets/svg/img1.svg";
import img2 from "../../../shared/assets/svg/img2.svg";
import img3 from "../../../shared/assets/svg/img3.svg";
import Container from "../../../shared/helpers/Container";

const testimonials = [
  {
    id: 1,
    name: "Валерия Кронцова",
    username: "@kronval",
    text: "Очень довольна услугами компании по подбору домов. Специалисты понимают все мои пожелания и требования к будущему жилью, быстро находят ...",
    img: img1,
  },
  {
    id: 2,
    name: "Даниил Петров",
    username: "@danielpetrov",
    text: "Очень благодарен компании за отличный сервис по подбору дома! Сотрудники профессиональны и внимательно подошли к моим требованиям и ...",
    img: img2,
  },
  {
    id: 3,
    name: "Лиза Петренко",
    username: "@lizak",
    text: "Очень рада что обратилась за помощью в подборе дома компании. Они не только предложили мне отличные варианты по моим критериям но и ...",
    img: img3,
  },
  {
    id: 4,
    name: "Елизаве́та Фё́доровна ",
    username: "@lizak",
    text: "Очень рада что обратилась за помощью в подборе дома компании. Они не только предложили мне отличные варианты по моим критериям но и ...",
    img: img3,
  },
];

const TestimonialSlider = () => {
  return (
    <Container>
      <div className="mt-40 ">
        <div className="flex flex-col items-center w-full mb-3 text-white">
          <h2 className="text-lg text-center md:text-4xl">
            Что говорят <span className="bg-[#DC2215] px-4">ЛЮДИ</span>
          </h2>
          <p className="py-3 px-2 text-center max-w-[646px] text-xs  sm:text-sm md:text-lg">
            {" "}
            В данном сервисе мы уже собрали для вас отзывы отнаших клиентов
            которые уже воспользовались нашим сервисом по подбору квартир
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          breakpoints={{
            1000: {
              slidesPerView: 3,
            },
          }}
          initialSlide={3}
          className="gap-2 "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="transition-transform duration-300 group "
            >
              <div className="p-1 text-white transition-all duration-300 bg-gray-800 rounded-lg sm:p-2 md:p-3 lg:p-4 shadow-mdgroup-hover:bg-red-500 ">
                <div className="flex flex-col gap-3 ">
                  <div className="flex gap-2 sm:gap-3 ">
                    <img
                      className=" lg:w-[73px] lg:h-[73px] rounded-full  sm:w-[48px]  md:w-[62px]  md:h-[62px]h-[35px] w-[35px] "
                      src={testimonial.img}
                      alt=""
                    />
                    <div>
                      <h3 className=" text-[7.7px] lg:text-xl font-semibold  md:text-sm sm:text-md ">
                        {testimonial.name}
                      </h3>
                      <p className="w-full text-[7px] sm:text-sm text-gray-400">
                        {testimonial.username}
                      </p>
                    </div>
                  </div>
                  <p className="text-base  sm:text-sm overflow-y-auto lg:h-[100px] md:h-[90px] sm:h-[70px]   h-[50px]">
                    {testimonial.text}
                  </p>
                </div>
                <hr className="my-0 lg:my-3 md:my-2" />
                <a
                  href="#"
                  className="text-[8px] text-blue-400 sm:text-sm md:text-md lg:text-lg lg:mt-4 hover:text-white"
                >
                  Посмотреть больше квартир
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-4 space-x-4 ">
          <div >
            <CustomPrevButton />
          </div>
          <div >
            <CustomNextButton />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialSlider;
