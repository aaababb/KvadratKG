import React from "react";
import MenuSort from "./MenuSort";
import FilterName from "./FilterName";
import ProductFilters from "./ProductFilters";
import Container from "../../../shared/helpers/Container";

const ActiveFilter = () => {
  return (
    <div>
       <div className="flex gap-1 text-white pl-5"> 
        <div className="">
          <h3>Показаны 1-12 из 240 результатов</h3>
        </div> 
         <div className="flex gap-3 pl-[26rem] text-center">
          <p>Сортировать :</p>

          <MenuSort />
        </div> 
      </div>
    <div>

      <FilterName />
    </div>
      <ProductFilters/>
    </div>
  );
};

export default ActiveFilter;
