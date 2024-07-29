import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getHeadings } from "../../store/action";
import Banner from "../Banner";

export default function Carousel() {
  const dispatch = useDispatch();
  const { headings, isLoading, error } = useSelector((state) => state.heading);

  useEffect(() => {
    dispatch(getHeadings());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative w-full h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {headings.results?.map((heading) => (
          <SwiperSlide key={heading.id}>
            <Banner heading={heading} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
