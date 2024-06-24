import React from "react";
import Container from "../../shared/helpers/Container";
import logo from "../../shared/assets/svg/logo.svg";
import search from "../../shared/assets/svg/search.svg";
const Header = () => {
  return (
    <div className="bg-[#C8180C]">
      <Container>
        <div className="py-[1.5vh]    flex items-center justify-between ">
          <div className="">
            <img src={logo} alt="img" />
          </div>
          <div className="w-[34.10%] flex  items-center  justify-between text-white text-md ">
            <p>О компании</p>
            <p>Услуги</p>
            <p>Квартиры</p>
            <p>Дома</p>
            <p>FAQ</p>
          </div>
          <div className="flex items-center border-2   bg-white rounded-full py-0 px-4 w-[280px]">
            <input
              className="flex-grow px-2 py-1 rounded-full outline-none"
              type="text"
              placeholder="Поиск"
            />
            <img className="w-[18px] h-[18px]" src={search} alt="search" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
