import React, { useContext } from "react";
import Container from "../../shared/helpers/Container";
import logo from "../../shared/assets/svg/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { ScrollContext } from "../layout/Layout";

const Header = () => {
  const scrollToSection = useContext(ScrollContext);
  const navigate = useNavigate();

  const handleScroll = (section) => {
    navigate('/');
    setTimeout(() => {
      scrollToSection(section);
    }, 100);
  };

  return (
    <div className="bg-[#C8180C]">
      <Container>
        <div className="py-[1.5vh] flex items-center justify-between">
          <div>
            <img src={logo} alt="img" />
          </div>
          <div className="flex items-center justify-between text-white gap-7 text-md">
            <Link to="/">Главная</Link>
            <p onClick={() => handleScroll("products")}>Купить недвижимость</p>
            <p onClick={() => handleScroll("uslugi")}>Услуги</p>
            <Link to='/AboutCompany'>О компании</Link>
            <p onClick={() => handleScroll("faq")}>FAQ</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
