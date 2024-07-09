import React, { useContext, useEffect, useRef } from "react";
import Container from "../../shared/helpers/Container";
import logo from "../../shared/assets/svg/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { ScrollContext } from "../layout/Layout";
import burger from "../../shared/assets/svg/burger.svg";
import Modal from "./Modal";

const Header = () => {
  const scrollToSection = useContext(ScrollContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleScroll = (section) => {
    navigate("/");
    setTimeout(() => {
      scrollToSection(section);
    }, 100);
  };

  return (
    <div className="bg-[#C8180C] w-screen ">
      <Container>
        <div className="py-[1.5vh] flex items-center justify-between ">
          <div>
            <img src={logo} alt="img" />
          </div>
          <img
            className="visible cursor-pointer md:hidden "
            src={burger}
            onClick={() => setIsOpen(!isOpen)}
            alt="img"
          />
          
          <div className="items-center justify-between hidden text-white md:flex gap-7 text-md">

            <Link to="/">Главная</Link>
            <p
              className="cursor-pointer"
              onClick={() => handleScroll("products")}
            >
              Купить недвижимость
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleScroll("uslugi")}
            >
              Услуги
            </p>
            <Link to="/AboutCompany">О компании</Link>
            <p className="cursor-pointer" onClick={() => handleScroll("faq")}>
              FAQ
            </p>
          </div>
        </div>
        {isOpen && (
            <div  ref={modalRef}>
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          )}
      </Container>
    </div>
  );
};

export default Header;
