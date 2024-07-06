import React from "react";
import Container from "../../shared/helpers/Container";
import check from "../../shared/assets/svg/chekcbox.svg";
import hi from "../../shared/assets/svg/hi.svg";
import monay from "../../shared/assets/svg/monay.svg";
import ava from "../../shared/assets/svg/ava.svg";

function Uslugi() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-[40px] mb-[157px] mt-20">
        <h1 className="text-3xl font-medium text-white">НАШИ УСЛУГИ</h1>
        <div className="flex items-center justify-between w-full ">
          <div className={`${style}`}>
            <div className={`${img}`}>
              <img
                className="w-[30px] h-[30px]  bg-red-600 rounded-full"
                src={check}
                alt="icon"
              />
            </div>
            <div className={`${div2}`}>
              <p className="w-[176px] text-center ">Продать недвижимость</p>
            </div>
            <button className={`${button}`}>Получить услугу</button>
          </div>

          <div className={`${style}`}>
            <div className={`${img}`}>
              <img
                className="w-[30px] h-[30px]  bg-red-600 rounded-full"
                src={hi}
                alt="icon"
              />
            </div>
            <div className={`${div2}`}>
              <p className="w-[176px] text-center ">
                Срочный выкуп недвижимости
              </p>
            </div>
            <button className={`${button}`}>Получить услугу</button>
          </div>

          <div className={`${style}`}>
            <div className={`${img}`}>
              <img
                className="w-[30px] h-[30px]  bg-red-600 rounded-full"
                src={monay}
                alt="icon"
              />
            </div>
            <div className={`${div2}`}>
              <p className="w-[176px] text-center ">
                Инвестиции в недвижимость
              </p>
            </div>
            <button className={`${button}`}>Получить услугу</button>
          </div>

          <div className={`${style}`}>
            <div className={`${img}`}>
              <img
                className="w-[30px] h-[30px]  bg-red-600 rounded-full"
                src={monay}
                alt="icon"
              />
            </div>
            <div className={`${div2}`}>
              <p className="w-[176px] text-center ">Подобрать недвижимость</p>
            </div>
            <button className={`${button}`}>Получить услугу</button>
          </div>

          <div className={`${style}`}>
            <div className={`${img}`}>
              <img
                className="w-[30px] h-[30px]  bg-red-600 rounded-full"
                src={ava}
                alt="icon"
              />
            </div>
            <div className={`${div2}`}>
              <p className="w-[176px] text-center ">
                Юридическое сопровождение
              </p>
            </div>
            
            <button className={`${button}`}>Получить услугу</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Uslugi;
const style = "flex flex-col items-center justify-between";
const img = "absolute p-1.5 mt-[-22px] bg-red-600 rounded-full ";
const div2 =
  "bg-white rounded-md py-[43px] px-[34px] flex flex-wrap  text-xl font-bold  items-center justify-center";
const button =
  "rounded-full px-[22px] text-lg py-[4px] bg-stone-800 hover:bg-stone-700 shadow text-white font-medium absolute  mt-[123px] ";
