import React from "react";
import CarouselPro from "../../Products/ui/CarouselPro";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const ProductFilters = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box className="flex flex-wrap items-center justify-around gap-1 lg:justify-between ">
      {[...Array(8)].map((_, index) => (
        <div key={index} className=" flex gap-[20px]">
          <div className="md:w-[300px] flex flex-col items-center justify-between md:h-[483px] sm:w-[200px] gap-1 w-[141px] rounded bg-white mt-[25px]">
            <div className="w-full h-[101px] rounded-tl rounded-tr">
              <CarouselPro />
            </div>
            <div className="flex justify-center mt-[8px] md:mt-[105px]">
              <p className="max-w-[247px] text-center text-xs md:text-[22px] font-medium">
                3 - комнатная квартира на улице Киевская 30
              </p>
            </div>
            <div className="flex flex-col justify-center mt-[8px] md:mt-[17px] px-2">
              <p className="text-[10px] md:text-[17px] font-normal">
                Площадь: м2.77.3
              </p>
              <p className="text-[10px] md:text-[17px] font-normal">
                Планировка: ИФ-1(А)-036
              </p>
            </div>
            <div className="flex justify-center mt-[15px] md:mt-[30px] w-full px-5">
              <div className="flex justify-between w-full gap-4">
                <p className="font-semibold text-sm md:text-[20px]">12млн.$</p>
                <p className="font-medium text-sm md:text-[18px] line-through">
                  16млн.$
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-[8px] md:mt-[15px]">
              <Link to="/info" onClick={scrollToTop}>
                <button className="text-center w-full py-[6px] px-[30px] md:px-[80px] md:py-[16px] rounded-full text-xs md:text-[18px] text-white font-normal bg-[#DC2215]">
                  Подробнее
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default ProductFilters;
