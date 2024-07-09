import React from "react";
import Rooms from "../../shared/assets/svg/Rooms.svg";
import baths from "../../shared/assets/svg/Baths.svg";
import fut from "../../shared/assets/svg/fut.svg";
import buildings from "../../shared/assets/svg/buildings.svg";
import bedroom from "../../shared/assets/svg/Bedroom.svg";
import kitchen from "../../shared/assets/svg/kitchen.svg";
import Typeimg from "../../shared/assets/svg/Typeimg.svg";
import Garage from "../../shared/assets/svg/Garage.svg";
import SelectAutoWidth from "./SelectAutoWidth";

const PenModal = () => {
  return (
    <div className="text-white ml-16">
      <h4>Обзор недвижимост</h4>
      <div className="grid grid-cols-4  w-[700px]">
        <div>
          <div className="flex gap-2 bg-[#C8180C] p-3 ">
            <p className="pt-1">Комнаты</p>
            <img width={30} src={Rooms} alt="Rooms" />
          </div>
          <div>
            <SelectAutoWidth />
          </div>
        </div>
        <div>
          <div className="flex gap-3 bg-[#C8180C] p-3">
            <p className="pt-1">Ванна</p>
            <img width={30} src={baths} alt="Baths" />
          </div>
          <div>
            <SelectAutoWidth />
          </div>
        </div>

        <div>
          <div className="flex gap-3 bg-[#C8180C] p-3">
            <p className="pt-1">кв.фут</p>
            <img width={30} src={fut} alt="Square Footage" />
          </div>
          <div>
            <SelectAutoWidth />
          </div>
        </div>
        <div>
          <div className="flex gap-3 bg-[#C8180C] p-3">
            <p className="pt-1">Год постройки</p>
            <img width={30} src={buildings} alt="Year Built" />
          </div>
          <div>
            <SelectAutoWidth />
          </div>
        </div>

        <div>
          <div className="flex gap-3 bg-[#C8180C] mt-10 p-3">
            <p className="pt-1">Спальня</p>
            <img width={30} src={bedroom} alt="Bedroom" />
          </div>
          <div>
            <SelectAutoWidth />
          </div>
        </div>
        <div>
          <div className="flex gap-3 bg-[#C8180C] mt-10 p-3">
            <p className="pt-1">Кухня</p>
            <img width={30} src={kitchen} alt="Kitchen" />
          </div>
          <div>
            <SelectAutoWidth />
          </div>
        </div>
        <div>
          <div className="flex gap-3 bg-[#C8180C] mt-10 p-3">
            <p className="pt-1">Тип</p>
            <img width={29} src={Typeimg} alt="Garage" />
          </div>
          <div>
            <SelectAutoWidth />
          </div>
        </div>
        <div>
          <div className="flex gap-3 bg-[#C8180C] mt-10 p-3">
            <p className="pt-1">Гараж</p>
            <img width={30} src={Garage} alt="Garage" />
          </div>
          <div>
            <SelectAutoWidth />
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h2>Удобства</h2>
        <div className="flex gap-10 pt-3">
          <div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Сад</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Спортзал</p>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Камин</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Бассейн</p>
            </div>
          </div>

          <div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Детская площадка</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Клубный дом</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 pt-5">
          <div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Прачечная</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Гаражи</p>
            </div>
          </div>

          <div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Лифт</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Стоянка</p>
            </div>
          </div>
          <div>
            <button className="bg-[#C8180C] text-white w-[140px] h-[45px] rounded-3xl">
              Cохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenModal;
