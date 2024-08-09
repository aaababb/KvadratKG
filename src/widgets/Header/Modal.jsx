import React from "react";
import insta from "../../shared/assets/svg/modal-instagram.svg";
import whatsapp from "../../shared/assets/svg/modal-whatsapp.svg";
import telega from "../../shared/assets/svg/modal-telega.svg";
import { ScrollContext } from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";

function Modal({ isOpen, setIsOpen }) {
  const scrollToSection = React.useContext(ScrollContext);
  const navigate = useNavigate();

  const handleScroll = (section) => {
    navigate("/");
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(section);
    }, 100);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="absolute inset-0 bg-black bg-opacity-50 z-[99]  h-full mt-[50px]"
    >
      <div className="w-[219px] h-[380px] bg-red-700 text-md text-white absolute rounded-l-b-md rounded-bl-3xl right-0 py-[19px]  z-[100]">
        <div className="flex flex-col">
          <Link to="/">
            <p onClick={() => setIsOpen(!isOpen)} className={`${style}`}>
              Главная
            </p>
          </Link>
          <hr className={`${hr}`} />
          <p onClick={() => handleScroll("products")} className={`${style}`}>
            Купить недвижимость
          </p>
          <hr className={`${hr}`} />
          <p onClick={() => handleScroll("uslugi")} className={`${style}`}>
            Услуги
          </p>
          <hr className={`${hr}`} />
          <Link to="/AboutCompany">
            <p onClick={() => setIsOpen(!isOpen)} className={`${style}`}>
              О компании
            </p>
          </Link>
          <hr className={`${hr}`} />
          <p  onClick={() => handleScroll("faq")} className={`${style}`}>
            FAQ
          </p>
          <hr className={`${hr}`} />
        </div>
        <div className="flex gap-1 pl-[20px] my-[10px]">
          <Link to="https://web.whatsapp.com/">
            <img src={whatsapp} alt="WhatsApp" />
          </Link>
          <Link to="https://www.instagram.com/">
            <img src={insta} alt="Instagram" />
          </Link>
          <Link to="https://web.telegram.org/a/">
            <img src={telega} alt="Telegram" />
          </Link>
        </div>
        <div className="grid place-items-center">
          <button className="w-[80%] text-center py-[10px] bg-[#262626] hover:bg-[#262636] text-white rounded-full">
            СВЯЗАТЬСЯ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

const style =
  "w-full pl-[20px] py-[12px] cursor-pointer hover:bg-[#292929] hover:text-white group";
const hr =
  "h-px rounded-full ml-[20px] bg-gray-200 border-0 dark:bg-gray-400 transition-opacity group-hover:hidden";
