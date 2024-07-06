import React from "react";
import Container from "../../shared/helpers/Container";
import check from "../../shared/assets/svg/chekcbox.svg";
import hi from "../../shared/assets/svg/hi.svg";
import monay from "../../shared/assets/svg/monay.svg";
import ava from "../../shared/assets/svg/ava.svg";

const services = [
  { icon: check, text: "Продать недвижимость" },
  { icon: hi, text: "Срочный выкуп недвижимости" },
  { icon: monay, text: "Инвестиции в недвижимость" },
  { icon: monay, text: "Подобрать недвижимость" },
  { icon: ava, text: "Юридическое сопровождение" },
];

function Uslugi() {
  return (
    <Container>
      <div className="flex flex-col justify-center w-screen gap-10 mt-20 mb-40 border md:items-center">
        <h1 className="text-3xl font-medium text-white">НАШИ УСЛУГИ</h1>
        <div className="flex items-center justify-between overflow-x-auto w-80">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-between border min-w-[250px] md:min-w-0">
              <div className="h-[61px] w-[61px] flex items-center justify-center bg-red-600 rounded-full mb-[-20px] z-[100]">
                <img
                  className="text-center w-[37px] h-[37px]"
                  src={item.icon}
                  alt="icon"
                />
              </div>
              <div className="bg-white rounded-md py-[20px] px-[34px] flex flex-wrap text-xl font-bold items-center justify-center">
                <p className="w-[176px] text-center">{item.text}</p>
              </div>
              <button className="rounded-full px-[22px] py-[4px] bg-stone-800 hover:bg-stone-700 text-white text-xs md:text-lg mt-[-12px]">
                Получить услугу
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Uslugi;
