import React from "react";
import Container from "../../shared/helpers/Container";
import logo from "../../shared/assets/svg/logo.svg";
import { Link } from "react-router-dom";

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
            <Link to={'/AboutCompany'}>О компании</Link>
            <p>FAQ</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
