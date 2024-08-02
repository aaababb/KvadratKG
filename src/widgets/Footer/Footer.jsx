import React from "react";
import footer from "../../shared/assets/svg/Footer.svg";
import Container from "../../shared/helpers/Container";
import tel from "../../shared/assets/svg/tel.svg";
import gmail from "../../shared/assets/svg/gmail.svg";
import vertor from "../../shared/assets/svg/vertor.svg";
import instagram from "../../shared/assets/svg/ivertor.svg";
import wvertor from "../../shared/assets/svg/wvertor.svg";
import telegram from "../../shared/assets/svg/tvertor.svg";

const Footer = () => {
  return (
    <div className="bg-[#111111] h-full  md:pt-20 md:mt-20 mt-3 pt-6 ">
      <Container>
        <div className="flex flex-col justify-between gap-5 mb-0 text-white md:flex-row">
          <div className="block sm:hidden md:block mb-5">
            <img src={footer} alt="" />
            <p className="pt-5">Наши социальные сети</p>
            <div className="flex gap-3 pt-5">
              <img src={instagram} alt="" />
              <img src={wvertor} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>
          <div className="flex gap-[64px] mb-5 ">
            <div className="leading-10">
              <p>Квартиры</p>
              <p>Офис продаж</p>
              <p>Ипотека</p>
              <p>Инвестиции</p>
            </div>
            <div className="leading-10">
              <p>Застройщики</p>
              <p>Акции</p>
              <p>Контакты</p>
              <p>Жилые комплексы</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="hidden sm:block md:hidden">
              <img src={footer} alt="" />
              <p className="pt-5">Наши социальные сети</p>
              <div className="flex gap-3 pt-5">
                <img src={instagram} alt="" />
                <img src={wvertor} alt="" />
                <img src={telegram} alt="" />
              </div>
            </div>
            <div className="leading-10 ">
              <p>Контакты</p>
              <div className="flex gap-3 text-center">
                <img src={tel} alt="" />
                <p>+996 400 567 455</p>
              </div>

              <div className="flex gap-3">
                <img src={gmail} alt="" />
                <p>apartm_@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <img src={vertor} alt="" />
                <p>г.Бишкек ул.45 Мира </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
