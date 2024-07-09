import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Slide1 from './Slide1';
import { useOutletContext } from 'react-router-dom';
import Slide2 from './Slide2';

const AdminMainDashboard = () => {
  const { mobileOpen } = useOutletContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div
        className={`h-[746px] transition-all duration-300 ${mobileOpen ? 'w-[90%]' : 'w-[92%]'}`}
      >
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
            <Slide1 windowWidth={windowWidth} mobileOpen={mobileOpen} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 windowWidth={windowWidth} mobileOpen={mobileOpen} />
          </SwiperSlide>
          <SwiperSlide>
            <p>nvjksd</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>vjsbd</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AdminMainDashboard;
