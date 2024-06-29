import React from "react";
import img from "../../../shared/assets/img/banner_home.png";
import Container from "../../../shared/helpers/Container";
import check from "../../../shared/assets/svg/chekcbox.svg";
import insta from "../../../shared/assets/svg/insta.svg";
import whatsapp2 from "../../../shared/assets/svg/whatsap2.svg"
import telegram3 from "../../../shared/assets/svg/telega5.svg";
import telegram2 from "../../../shared/assets/svg/telega2.svg";

function Banner() {
  const texts = [
    "Юридические чистые объекты",
    "Вся ответственность на нас по договору",
    "Поиск, подбор, продажа - все под ключ",
  ];

  return (
    <>
      <div
        className="flex items-center justify-center w-full h-screen bg-cover"
        style={{ backgroundImage: `linear-gradient(#0001, #000), url(${img})` }}
      >
        <Container>
          <div className="flex flex-col justify-between h-screen py-6">
            <div></div>
            <div className="flex flex-col gap-9">
              <div>
                <h1 className="w-3/4 text-6xl font-semibold text-white">
                  Агентство недвижимости в Бишкеке полного цикла
                </h1>
              </div>
              <div className="flex items-center justify-between">
                {texts.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img
                      className="p-1 bg-red-600 rounded-full"
                      src={check}
                      alt="icon"
                    />
                    <p className="text-sm font-medium text-white">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button className="px-8 py-3 text-white bg-red-700 rounded-full hover:bg-red-600">
                  Получить консультацию от риэлтора
                </button>
                <div className="flex items-center gap-4 px-10 py-3 text-white bg-red-600 rounded-full">
                  <div className="relative flex items-center justify-center cursor-pointer">
                    <img src={telegram3} alt="telegram" className="w-9 h-9" />
                    <img src={telegram2} alt="telegram2" className="absolute" />
                  </div>
                  <hr className="w-px h-6 bg-gray-400 " />
                  <img
                    src={whatsapp2}
                    alt="whatsapp"
                    className="cursor-pointer w-9 h-9"
                  />
                  <hr className="w-px h-6 bg-gray-400" />
                  <img
                    src={insta}
                    alt="instagram"
                    className="cursor-pointer w-9 h-9"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Banner;
