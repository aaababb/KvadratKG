import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from "../../AdminRealEstate/store/action";

import DropDownMen from "./DropDownMen";
import ProductBLock from "./ProductBLock";
import Container from "../../../shared/helpers/Container";

const Products = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.houses);

  React.useEffect(() => {
    dispatch(getHouses());
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <div className=" flex flex-col md:flex-row items-start gap-7 justify-between md:items-end mt-[-90px]">
        <DropDownMen />
        <div className=" max-w-[808px] min-h-[74px] font-inter text-sm  md:text-[20px] font-semibold text-white">
          <span className="top-[30px] relative w-[670px] uppercase">
            выбирайте квартиру для жизни или инвестиций. предложение доступно
          </span>

          <span className="bg-[#DC2215] px-5 rounded-sm top-[34px] relative ">
            к покупке прямо сейчас
          </span>
        </div>
      </div>
      <div className="w-full ">
        <div className=" w-full lg:overflow-x-hidden flex lg:flex-wrap gap-5 items-start overflow-x-scroll">
          {items.slice(0, 8).map((obj, index) => (
            <div
              className="w-[230px] pt-[20px] md:pt-[25px] lg:w-[22%]"
              key={index}
            >
              <ProductBLock {...obj} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-5">
        <Link to={"/watch"} onClick={scrollToTop}>
          <button className="bg-[red] text-white py-3 px-7 text-xl rounded-full">
            Смотреть все
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Products;
