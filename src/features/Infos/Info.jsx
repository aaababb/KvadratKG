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
        <div className="flex flex-col px-[30px] py-[26px] justify-between  bg-zinc-800 w-[611px] rounded-md h-[211px]">
          <div className="flex items-center justify-between ">
            <h1 className="text-xl font-medium text-white">
              РОСКОШНАЯ ВИЛЛА НА ЗАКАТЕ
            </h1>
            <button className="text-lg bg-red-600 hover:bg-red-700 rounded-full py-[4px] text-white px-[19px]">
              ДЛЯ ПРОДАЖИ
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <img src={map} alt="" />
              <p className="text-lg text-white">город Чолпон-Ата</p>
            </div>
            <hr className="h-[23px] border border-gray-500 rounded-full" />
            <div className="flex gap-2">
              <img src={oclock} alt="" />
              <p className="text-lg text-white">11 дней назад</p>
            </div>
          </div>
          <div className="text-xl font-medium text-white">
            $3,98, 000 ($344,00 / sqft)
          </div>
        </div>
        <div className="flex gap-2">
          <>
            <img className="w-[972px] h-[655px]" src={selImg || img1} alt="" />
          </>
          <div
            className="flex flex-col items-center h-[655px] justify-between gap-2 overflow-y-scroll "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((item, index) => (
              <img
                onClick={() => handleImg(item.image)}
                src={item.image}
                className="w-[313px] h-[209px] cursor-pointer"
                alt={`thumbnail-${index}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white ">
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
        <div className="flex flex-col gap-2 text-white">
          <h1 className="text-xl font-medium">ОБЗОР НЕДВИЖИМОСТИ</h1>

          <div className="flex flex-wrap justify-between  w-[791px] items-center gap-3 ">
            {types.map((item, index) => (
              <div
                key={index}
                className={`flex bg-red-600 gap-2 rounded-sm py-[4px] pl-[10px] ${
                  item.name == "Комнаты" || item.name == "Год Постройки"
                    ? "w-[233px]"
                    : "w-[172px] pr-[30px]"
                }`}
              >
                <img src={item.img} alt="" />
                <div className="flex flex-col items-start ">
                  <h1>{item.name}</h1>
                  <p className="text-gray-300">{item.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-[30px] mb-[75px]">
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