import React from "react";
import { useNavigate } from "react-router-dom";

import CarouselPro from "./CarouselPro";

const ProductBLock = ({ image, price, title, id }) => {
  const navigate = useNavigate();
  const clickInfo = (id) => {
    window.scrollTo(0, 0);
    navigate(`/info/${id}`);
  };
  return (
    <div className="mw-[30cwq] rounded-lg overflow-hidden bg-[#eee]">
      <div className="w-[100%]">
        <CarouselPro images={Array(4).fill(image)} />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-center">
          <b>Площадь:</b> 190(м2)
        </p>
        <div className="flex justify-between">
          <b>Цена:</b>
          <b>$ {price}</b>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-red-700 text-white mt-2 px-7 rounded-xl hover:bg-red-600 active:bg-red-800 transition-colors"
            onClick={() => clickInfo(id)}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBLock;
