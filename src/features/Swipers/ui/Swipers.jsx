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
      <div className="mt-40">
      <div className="text-white ">
                <h2 className="text-4xl text-center">Что говорят <span className="bg-[#DC2215] px-4">ЛЮДИ</span></h2>
                <p className="w-[600px] text-center ml-[23rem] my-5 "> В данном сервисе мы уже собрали для вас отзывы отнаших клиентов которые уже воспользовались нашим сервисом по подбору квартир</p>
            </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          initialSlide={3}
        >

          
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="group transition-transform duration-300"
            >
              <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between   group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                <div>
                  <div className="flex gap-3">
                    <img src={testimonial.img} alt="" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {testimonial.name}
                      </h3>

                      <p className="text-sm text-gray-400 mb-4">
                        {testimonial.username}
                      </p>
                    </div>
                  </div>
                  <p className="text-base">{testimonial.text}</p>
                </div>
                <hr />
                <a
                  href="#"
                  className="text-blue-400 mt-4 group-hover:text-white"
                >
                  Посмотреть больше квартир
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-4 space-x-4 ">
          <CustomPrevButton />
          <CustomNextButton />
        </div>
      </div>
    </Container>
  );
};

export default TestimonialSlider;
