import React from "react";
import MenuSort from "./MenuSort";
import FilterName from "./FilterName";
import ProductFilters from "./ProductFilters";

const ActiveFilter = ({ open }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-5 text-white ">
        <h3 className="text-xs md:text-sm w-[150px] ">
          Показаны 1-12 из 240 результатов
        </h3>
        <div onClick={() => open(true)} className="relative inline-block pr-3 font-medium cursor-pointer md:hidden">
          <span className="text-white">Фильтр</span>
          <div className="absolute bottom-0 left-0 w-full border-b border-white"></div>
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full"></div>
        </div>
        <div className="flex items-center hidden gap-3 md:block">
          <p>Сортировать :</p>
          <MenuSort />
        </div>
      </div>
      <FilterName />
      <div className="w-full mt-10">
        <ProductFilters />
      </div>
    </>
  );
};

export default ActiveFilter;
