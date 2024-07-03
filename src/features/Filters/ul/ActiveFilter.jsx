import React from "react";
import MenuSort from "./MenuSort";
import FilterName from "./FilterName";
import ProductFilters from "./ProductFilters";

const ActiveFilter = () => {
  return (
    <div>
      <div className="flex gap-[420px] text-white pl-5">
        <div className="">
          <h3>Показаны 1-12 из 240 результатов</h3>
        </div>
        <div className="flex gap-3 text-center">
          <p>Сортировать :</p>

          <MenuSort />
        </div>
      </div>
    <div>

      <FilterName />
    </div>
    <div className="pl-5 mt-10">
      <ProductFilters/>
    </div>
    </div>
  );
};

export default ActiveFilter;
