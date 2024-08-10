import React from "react";
import Carousel from "../../features/Banner.jsx/Carousel";
import { Link } from "react-router-dom";

export const Homepages: React.FC = () => {
  const texts: string[] = [
    "Юридические чистые объекты",
    "Вся ответственность на нас по договору",
    "Поиск, подбор, продажа - все под ключ",
  ];
  return (
    <div className="relative">
      <Carousel />
      <div className="absolute bottom-[70px] left-[10%] lg:left-[100px] z-10">
        <div className="texts flex flex-col lg:flex-row gap-6 lg:gap-60 mb-10">
          {texts?.map((text, index) => (
            <div key={index} className="flex gap-2">
              <img className="p-1 bg-red-600 rounded-full" src="./svg/chekcbox.svg" alt="icon" />
              <p className="text-xs md:text-sm font-medium text-white">{text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between gap-4">
          <Link to="https://web.telegram.org/a/">
            <button className="px-3 py-1.5 md:px-8 md:py-3 text-xs md:text-base text-white bg-red-700 rounded-full hover:bg-red-600">
              Получить консультацию от риэлтора
            </button>
          </Link>
          <div className="flex items-center gap-2 md:gap-4 px-4 md:px-10 py-1.5 md:py-3 text-white bg-red-600 rounded-full">
            <Link to="https://web.telegram.org/a/">
              <div className="relative flex items-center justify-center cursor-pointer">
                <img src="./svg/telega5.svg" alt="telegram" className="w-5 md:w-9 h-5 md:h-9" />
                <img src="./svg/telega2.svg" alt="telegram2" className="absolute w-3 md:w-7 h-3 md:h-7" />
              </div>
            </Link>
            <Link to="https://wa.me/996708242906">
              <img src="./svg/whatsap2.svg" alt="whatsapp" className="cursor-pointer w-5 md:w-9 h-5 md:h-9" />
            </Link>
            <Link to="https://www.instagram.com/tunduk.312?igsh=MXYzdjd1M2d6OHc4ZQ%3D%3D&utm_source=qr">
              <img src="/svg/insta.svg" alt="instagram" className="cursor-pointer w-5 md:w-9 h-5 md:h-9" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
