import React from "react";
import { Link } from "react-router-dom";

import CarouselPro from "./CarouselPro";

const ProductBLock = ({ images, price, title, id }) => {
  return (
    <div className="w-[310px] flex  gap-[20px]  ">
      <div className="md:w-[310px] flex flex-col items-center justify-between   md:h-[483px] gap-1 w-[151px]  rounded bg-white mt-[25px]">
        <div className="w-full h-[101px] rounded-tl rounded-tr">
          <CarouselPro images={images} />
        </div>
        <div className="flex justify-center mt-[8px] md:mt-[105px]">
          <p className="max-w-[280px] text-center text-xs md:text-[22px] font-medium ">
            {title}
          </p>
        </div>
        <div className="flex flex-col justify-center mt-[8px] md:mt-[17px] px-2 ">
          <p className=" text-[10px]  md:text-[17px] font-normal ">
            Площадь: м2.77.3
          </p>
        </div>
        <div className="flex justify-center mt-[15px] md:mt-[30px]  w-full px-5">
          <div className="flex justify-between w-full gap-4 ">
            <p className="font-semibold text-sm md:text-[20px]">Цена:</p>
            <p className="font-semibold text-sm md:text-[20px]">{price} $</p>
          </div>
        </div>
        <div className="flex justify-center m-[5px] md:mt-[15px]">
          <Link to={`/info/${id}`} onClick={() => window.scrollTo(0, 0)}>
            <button className=" text-center w-full  py-[6px]  px-[30px] md:px-[80px] md:py-[16px]  rounded-full text-xs md:text-[18px] text-white font-normal bg-[#DC2215]">
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductBLock;
