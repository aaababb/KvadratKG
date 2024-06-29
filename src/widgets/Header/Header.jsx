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
          <div className="flex items-center justify-between text-white gap-7 text-md">
            <p>Главная</p>
            <p>Купить недвижимость</p>
            <p>Услуги</p>
            <p>О компании</p>
            <p>FAQ</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
