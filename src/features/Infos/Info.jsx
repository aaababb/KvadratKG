import React from "react";
import { getHouseById } from "../AdminRealEstate/store/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Container from "../../shared/helpers/Container";
import map from "../../shared/assets/svg/map.svg";
import oclock from "../../shared/assets/svg/oclock.svg";
import hol from "../../shared/assets/svg/hol.svg";
import van from "../../shared/assets/svg/van.svg";
import kuh from "../../shared/assets/svg/kuh.svg";
import kv from "../../shared/assets/svg/kv.svg";
import garaj from "../../shared/assets/svg/garaj.svg";

const checkbox = [
  { label: "Спортзал", name: "gym" },
  { label: "Клубный зал", name: "clubhouse" },
  { label: "Лифт", name: "elevator" },
  { label: "Камин", name: "fireplace" },
  { label: "Гараж", name: "garage" },
  { label: "Сад", name: "garden" },
  { label: "Бассейн", name: "pool" },
  { label: "Парковка", name: "parking" },
  { label: "Площадка", name: "area" },
  { label: "Прачечная", name: "laundry" },
];
function Info() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const house = useSelector((state) => state.houses.item);
  console.log(house);

  React.useEffect(() => {
    dispatch(getHouseById(id));
  }, [id]);

  const types = [
    {
      name: "Комнаты",
      number: house.rooms,
      img: hol,
    },
    {
      name: "Ванна",
      number: house.bathroom,
      img: van,
    },
    {
      name: "Кухня",
      number: house.kitchen,
      img: kuh,
    },
    { name: "Площадь (м2)", number: house.square_footage, img: kv },
    {
      name: "Гараж",
      number: house.garages,
      img: garaj,
    },
  ];

  const handleImg = (img) => {
    setImg(img);
  };

  const checkContainer = checkbox.map(({ label, name }, index) => {
    let checked = false;

    Object.keys(house).forEach((key) => {
      if (name === key) {
        checked = house[key];
      }
    });

    const styleTW = checked ? "bg-green-700" : "bg-[#262626] border border-gray-600";

    return (
      <div key={index} className={`text-sm text-white ${styleTW} rounded-lg py-2 px-5 cursor-default select-none`}>
        <p>{label}</p>
      </div>
    );
  });

  return (
    <Container>
      <div className="py-[56px] flex flex-col  gap-7">
        <div className="flex flex-col px-[10px]  sm:px-[30px] py-[26px] justify-between  bg-zinc-800 md:w-[611px]  w-full rounded-md gap-3 sm:gap-6">
          <div className="flex items-center justify-between ">
            <h1 className="text-xs font-medium text-white sm:text-xl ">{house.title || "РОСКОШНАЯ ВИЛЛА НА ЗАКАТЕ"}</h1>
            <button className=" text-[8px] bg-red-600 hover:bg-red-700 rounded-full py-[4px] text-white px-[9px] sm:px-[19px] md:text-[10px] md:px-[14px] lg:text-[12px] lg:px-[18px] xl:text-[14px] xl:px-[22px]">
              ДЛЯ ПРОДАЖИ
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]" src={map} alt="" />
              <p className="text-sm text-white sm:text-lg">город {house.city}</p>
            </div>
            <hr className="h-[23px] border border-gray-500 rounded-full" />
            <div className="flex items-center gap-1 ">
              <img className="w-[14px] h-[14px]" src={oclock} alt="" />
              <p className="text-sm text-white sm:text-lg ">11 дней назад</p>
            </div>
          </div>
          <div className="text-sm font-medium text-white sm:text-xl">$ {house.price}</div>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row ">
          <img className="lg:w-[75%] lg:h-[655px] h-full w-full red-500" src={house.image} alt="Product" />

          <div
            className="flex items-center lg:h-[655px] justify-between gap-2 overflow-x-scroll lg:flex-col lg:overflow-y-scroll "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {...Array(4)
              .fill(house.image)
              .map((image, index) => (
                <img
                  key={index}
                  onClick={() => handleImg(image)}
                  src={image}
                  className="md:w-[313px] md:h-[159px] sm:w-[295px] sm:h-[100px] w-[103px] h-[68px] cursor-pointer "
                  alt={`thumbnail-${index}`}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white ">
          <h1 className="text-xl font-medium">Описание недвижимости</h1>
          <p className="w-full overflow-y-scroll " style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {house.description}
          </p>
        </div>
        <div className="bg-[#262626] py-3 px-5 rounded-xl">
          <h1 className="text-xl text-white font-medium ml-5 pb-5">ОБЗОР НЕДВИЖИМОСТИ</h1>
          <div className="flex gap-4">
            {types.map((obj, index) => (
              <div key={index} className="flex flex-1 bg-red-600 gap-2 rounded-lg hover:shadow-inner py-[4px] pl-[10px] h-[70px]">
                <img src={obj.img} alt="job" className="p-2" />
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-white text-xl font-bold">{obj.name}</h1>
                  <p className="text-gray-100 text-xl">{obj.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#262626] py-3 px-5 rounded-xl">
          <h1 className="text-xl font-medium text-white ml-10">УДОБСТВА</h1>
          <div className="grid grid-cols-5 py-5 gap-4">{checkContainer}</div>
        </div>
      </div>
    </Container>
  );
}
export default Info;
