import React from "react";
import Container from "../../shared/helpers/Container";
import map from "../../shared/assets/svg/map.svg";
import oclock from "../../shared/assets/svg/oclock.svg";
import img1 from "../../shared/assets/img/info-img.png";
import img2 from "../../shared/assets/img/info-img2.png";
import hol from "../../shared/assets/svg/hol.svg";
import van from "../../shared/assets/svg/van.svg";
import kuh from "../../shared/assets/svg/kuh.svg";
import tip from "../../shared/assets/svg/tip.svg";
import god from "../../shared/assets/svg/god.svg";
import div from "../../shared/assets/svg/div.svg";
import kv from "../../shared/assets/svg/kv.svg";
import garaj from "../../shared/assets/svg/garaj.svg";
import check from "../../shared/assets/svg/chekcbox.svg";

const images = [
  { image: img2 },
  { image: img1 },
  { image: img2 },
  { image: img1 },
  { image: img2 },
  { image: img1 },
];

const types = [
  { name: "Комнаты", number: 2, img: hol },
  { name: "Ванна", number: 1, img: van },
  { name: "Кухня", number: 1, img: kuh },
  { name: "Тип", number: "Villa", img: tip },
  { name: "Год Постройки", number: 2023, img: god },
  { name: "Тип", number: 2, img: div },
  { name: "Кв. Фут", number: "1,148", img: kv },
  { name: "Гараж", number: 1, img: garaj },
];
const chekbox = [
  "Спортзал",
  "Гараж",
  "Сад",
  "Камин",
  "Бассейн",
  "Стоянка",
  "Площадка",
  "Клубный дом",
];
function Info() {
  const [selImg, setImg] = React.useState();

  const handleImg = (img) => {
    setImg(img);
  };
  return (
    <Container>
      <div className="py-[56px] flex flex-col  gap-7">
        <div className="flex flex-col px-[10px]  sm:px-[30px] py-[26px] justify-between  bg-zinc-800 md:w-[611px]  w-full rounded-md gap-3 sm:gap-6">
          <div className="flex items-center justify-between ">
            <h1 className="text-xs font-medium text-white sm:text-xl ">
              РОСКОШНАЯ ВИЛЛА НА ЗАКАТЕ
            </h1>
            <button className=" text-[8px] bg-red-600 hover:bg-red-700 rounded-full py-[4px] text-white px-[9px] sm:px-[19px] md:text-[10px] md:px-[14px] lg:text-[12px] lg:px-[18px] xl:text-[14px] xl:px-[22px]">
              ДЛЯ ПРОДАЖИ
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img
                className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
                src={map}
                alt=""
              />
              <p className="text-sm text-white sm:text-lg">город Чолпон-Ата</p>
            </div>
            <hr className="h-[23px] border border-gray-500 rounded-full" />
            <div className="flex items-center gap-1 ">
              <img className="w-[14px] h-[14px]" src={oclock} alt="" />
              <p className="text-sm text-white sm:text-lg ">11 дней назад</p>
            </div>
          </div>
          <div className="text-sm font-medium text-white sm:text-xl">
            $3,98, 000 ($344,00 / sqft)
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row ">
          <img
            className="lg:w-[75%] lg:h-[655px] h-full w-full red-500  "
            src={selImg || img1}
            alt=""
          />

          <div
            className="flex items-center lg:h-[655px] justify-between gap-2 overflow-x-scroll lg:flex-col lg:overflow-y-scroll "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((item, index) => (
              <img
                onClick={() => handleImg(item.image)}
                src={item.image}
                className="md:w-[313px] md:h-[159px] sm:w-[295px] sm:h-[100px] w-[103px] h-[68px] cursor-pointer "
                alt={`thumbnail-${index}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white ">
          <h1 className="text-xl font-medium">Описание недвижимости</h1>
          <p
            className="w-full  h-[200px]  overflow-y-scroll "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            Lorem ipsum dolor sit amet consectetur. Congue malesuada in molestie
            habitant sodales vitae aliquam leo enim. Ullamcorper quis sed sed
            velit lectus. Libero quis elit lacus amet cras fermentum vel.
            Aliquet bibendum nunc morbi quis suspendisse sollicitudin egestas
            feugiat praesent. Blandit felis ullamcorper et ut sodales in eget
            aliquam. Turpis pharetra in eget consectetur ut proin posuere urna.
            Pretium consectetur et in tellus risus eu eget.Lorem ipsum dolor sit
            amet consectetur. Congue malesuada in molestie habitant sodales
            vitae aliquam leo enim. Ullamcorper quis sed sed velit lectus.
            Libero quis elit lacus amet cras fermentum vel. Aliquet bibendum
            nunc morbi quis suspendisse sollicitudin egestas feugiat praesent.
            Blandit felis ullamcorper et ut sodales in eget aliquam. Turpis
            pharetra in eget consectetur ut proin posuere urna. Pretium
            consectetur et in tellus risus eu eget.Lore
          </p>
        </div>
        <div className="flex flex-col gap-2 overflow-x-scroll text-white " style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <h1 className="text-xl font-medium">ОБЗОР НЕДВИЖИМОСТИ</h1>

          <div className="flex flex-wrap items-center justify-between  w-[791px]  gap-3   ">
            {types.map((item, index) => (
              <div
                key={index}
                className={`flex bg-red-600 gap-2 rounded-sm py-[4px] pl-[10px] ${
                  item.name === "Комнаты" || item.name === "Год Постройки"
                    ? "w-[233px]"
                    : "w-[172px] pr-[30px]"
                }`}
              >
                <img src={item.img} alt="" />
                <div className="flex flex-col items-start">
                  <h1>{item.name}</h1>
                  <p className="text-gray-300">{item.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-[30px] mb-[75px] overflow-x-scroll" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <h1 className="text-xl font-medium text-white">УДОБСТВА</h1>
          <div className="flex grid grid-cols-4 gap-4 w-[692px] ">
            {chekbox.map((item, index) => (
              <div key={index} className="flex gap-1 gap-4 text-white ">
                <img
                  className="p-1 bg-red-600 rounded-full"
                  src={check}
                  alt="icon"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Info;
