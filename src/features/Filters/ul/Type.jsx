import React from "react";
import Select from "./Select";
import SaleMenu from "./SaleMenu";

const Type = () => {
  return (
    <div className="text-white bg-[#111111] lg:w-[350px] md:w-[280px]  p-5 rounded	">
      <div>
        <h2>Найти свою недвижимость</h2>
      </div>
      <hr className="my-5" />
      <div className="mt-5">
        <p className="mb-3">Местоположение</p>
        <Select />
      </div>
      <hr className="mt-10 mb-5" />
      <div>
        <p>Cтатус собственности</p>
        <div>
          <div className="flex gap-3 pt-3">
            <input type="checkbox" />
            <p>Арендовать</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" />
            <p>Продавать</p>
          </div>
        </div>
      </div>
      <hr className="mt-10 mb-5" />
      <div>
        <p>Тип недвижимости</p>
        <div>
          <div className="flex gap-3">
            <input type="checkbox" />
            <p>Квартира</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" />
            <p>Офис</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" />
            <p>Дома</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" />
            <p>Виллы</p>
          </div>
        </div>
      </div>
      <hr className="mt-10 mb-5" />

      <div>
        <div>Цена</div>
        <div>
          <SaleMenu />
        </div>
      </div>
      <hr className="mt-10 mb-5" />
  
    
      <div>
        <p>Удобства</p>
        <div className="flex gap-10">
          <div className="pt-5">
            <div className="flex gap-3 ">
              <input type="checkbox" />
              <p>Сад</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Спортзал</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Лифт</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Гаражи</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Стоянка</p>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Камин</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Бассейн</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Детская площадка</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Клубный дом</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Прачечная</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
