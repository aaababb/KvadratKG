import React from "react";
import img from "../../../shared/assets/img/banner_home.png";
import Container from "../../../shared/helpers/Container";
import check from "../../../shared/assets/svg/chekcbox.svg";
import insta from "../../../shared/assets/svg/insta.svg";
import whatsapp2 from "../../../shared/assets/svg/whatsap2.svg";
import telegram3 from "../../../shared/assets/svg/telega5.svg";
import telegram2 from "../../../shared/assets/svg/telega2.svg";
import { Link } from "react-router-dom";

function Banner() {
  const texts = [
    "Юридические чистые объекты",
    "Вся ответственность на нас по договору",
    "Поиск, подбор, продажа - все под ключ",
  ];

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: ` linear-gradient(#0001, #000), url(${img})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}
    >
      <Container>
        <div className="flex flex-col justify-between h-full py-6">
          <div></div>
          <div className="flex flex-col gap-9">
            <div>
              <h1 className="w-full md:w-3/4 text-4xl md:text-6xl font-semibold text-white mt-[350px]">
                Агентство недвижимости в Бишкеке полного цикла
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              {texts.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img
                    className="p-1 bg-red-600 rounded-full"
                    src={check}
                    alt="icon"
                  />
                  <p className="text-xs md:text-sm font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link to="https://web.telegram.org/a/">
                <button className="px-3 py-1.5 md:px-8 md:py-3 text-xs md:text-base text-white bg-red-700 rounded-full hover:bg-red-600">
                  Получить консультацию от риэлтора
                </button>
              </Link>
              <div className="flex items-center gap-2 md:gap-4 px-4 md:px-10 py-1.5 md:py-3 text-white bg-red-600 rounded-full">
                <Link to="https://web.telegram.org/a/">
                  <div className="relative flex items-center justify-center cursor-pointer">
                    <img src={telegram3} alt="telegram" className="w-5 md:w-9 h-5 md:h-9" />
                    <img
                      src={telegram2}
                      alt="telegram2"
                      className="absolute w-3 md:w-7 h-3 md:h-7"
                    />
                  </div>
                </Link>
                <Link to="https://web.whatsapp.com/">
                  <img
                    src={whatsapp2}
                    alt="whatsapp"
                    className="cursor-pointer w-5 md:w-9 h-5 md:h-9"
                  />
                </Link>
                <Link to="https://www.instagram.com/">
                  <img
                    src={insta}
                    alt="instagram"
                    className="cursor-pointer w-5 md:w-9 h-5 md:h-9"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
