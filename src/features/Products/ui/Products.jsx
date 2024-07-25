import React from "react";
import Container from "../../../shared/helpers/Container";
import CarouselPro from "./CarouselPro";
import DropDownMen from "./DropDownMen";
import { Link } from "react-router-dom";

const Products = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <div className=" flex flex-col md:flex-row items-start gap-7 justify-between md:items-end mt-[-90px]">
        <DropDownMen />
        <div className=" max-w-[808px] min-h-[74px] font-inter text-sm  md:text-[20px] font-semibold text-white">
          <span className="top-[30px] relative \bg-gray-200  w-[670px]">
            ВЫБИРАЙТЕ КВАРТИРУ ДЛЯ ЖИЗНИ ИЛИ ИНВЕСТИЦИЙ. ПРЕДЛОЖЕНИЕ ДОСТУПНО
          </span>

          <span className="bg-[#DC2215] px-5 rounded-sm top-[34px] relative ">
            К ПОКУПКЕ ПРЯМО СЕЙЧАС
          </span>
        </div>
        <div className="flex justify-end">
          <Link to={"/watch"} onClick={scrollToTop}>
            <p className="font-inter text-[18px] font-normal text-white border-b border-white w-[112px] h-[25px]">
              Смотреть все
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-4 overflow-x-scroll ">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="w-[310px] flex  gap-[20px]  ">
            <div className="md:w-[310px] flex flex-col items-center justify-between   md:h-[483px] gap-1 w-[151px]  rounded bg-white mt-[25px]">
              <div className="w-full h-[101px] rounded-tl rounded-tr">
                <CarouselPro />
              </div>
              <div className="flex justify-center mt-[8px] md:mt-[105px]">
                <p className="max-w-[280px] text-center text-xs md:text-[22px] font-medium ">
                  3 - комнатная квартира на улице Киевская 30
                </p>
              </div>
              <div className="flex flex-col justify-center mt-[8px] md:mt-[17px] px-2 ">
                <p className=" text-[10px]  md:text-[17px] font-normal ">
                  Площадь: м2.77.3
                </p>
                <p className=" text-[10px]  md:text-[17px] font-normal">
                  Планировка: ИФ-1(А)-036
                </p>
              </div>
              <div className="flex justify-center mt-[15px] md:mt-[30px]  w-full px-5">
                <div className="flex justify-between w-full gap-4 ">
                  <p className="font-semibold text-sm md:text-[20px]">
                    12млн.$
                  </p>
                  <p className="font-medium text-sm md:text-[18px] line-through">
                    16млн.$
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-[8px] md:mt-[15px]">
                <Link to={"/watch"} onClick={scrollToTop}>
                  <button className=" text-center w-full  py-[6px]  px-[30px] md:px-[80px] md:py-[16px]  rounded-full text-xs md:text-[18px] text-white font-normal bg-[#DC2215]">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
