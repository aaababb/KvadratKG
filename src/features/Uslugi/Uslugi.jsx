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
      <div className="flex flex-col items-center justify-center  w-full  gap-[40px] mb-[157px] mt-20  ">
        <h1 className="text-3xl font-medium text-white">НАШИ УСЛУГИ</h1>
//         <div className="flex items-center justify-between w-full ">
//           <div className={`${style}`}>
//             <div className={`${img}`}>
//               <img
//                 className="w-[30px] h-[30px]  bg-red-600 rounded-full"
//                 src={check}
//                 alt="icon"
//               />
//             </div>
//             <div className={`${div2}`}>
//               <p className="w-[176px] text-center ">Продать недвижимость</p>
//             </div>
//             <button className={`${button}`}>Получить услугу</button>
//           </div>

//           <div className={`${style}`}>
//             <div className={`${img}`}>
//               <img
//                 className="w-[30px] h-[30px]  bg-red-600 rounded-full"
//                 src={hi}
//                 alt="icon"
//               />
//             </div>
//             <div className={`${div2}`}>
//               <p className="w-[176px] text-center ">
//                 Срочный выкуп недвижимости
//               </p>
//             </div>
//             <button className={`${button}`}>Получить услугу</button>
//           </div>

//           <div className={`${style}`}>
//             <div className={`${img}`}>
//               <img
//                 className="w-[30px] h-[30px]  bg-red-600 rounded-full"
//                 src={monay}
//                 alt="icon"
//               />
//             </div>
//             <div className={`${div2}`}>
//               <p className="w-[176px] text-center ">
//                 Инвестиции в недвижимость
//               </p>
//             </div>
//             <button className={`${button}`}>Получить услугу</button>
//           </div>

//           <div className={`${style}`}>
//             <div className={`${img}`}>
//               <img
//                 className="w-[30px] h-[30px]  bg-red-600 rounded-full"
//                 src={monay}
//                 alt="icon"
//               />
//             </div>
//             <div className={`${div2}`}>
//               <p className="w-[176px] text-center ">Подобрать недвижимость</p>
//             </div>
//             <button className={`${button}`}>Получить услугу</button>
//           </div>

//           <div className={`${style}`}>
//             <div className={`${img}`}>
//               <img
//                 className="w-[30px] h-[30px]  bg-red-600 rounded-full"
//                 src={ava}
//                 alt="icon"
//               />
//             </div>
//             <div className={`${div2}`}>
//               <p className="w-[176px] text-center ">
//                 Юридическое сопровождение
//               </p>
//             </div>
            
//             <button className={`${button}`}>Получить услугу</button>
//           </div>
        <div className="flex items-center justify-between w-full gap-2 overflow-x-auto">  
          {services.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-between  ">
              <div className="md:h-[51px] md:w-[51px] h-[35px] w-[35px] flex items-center justify-center bg-red-600 rounded-full mb-[-20px] z-[100]">
                <img
                  className="text-center w-[18px] h-[18px] md:w-[27px] md:h-[27px]"
                  src={item.icon}
                  alt="icon"
                />
              </div>
              <div className="bg-white rounded-md py-[40px] px-[34px] flex flex-wrap text-xl font-bold items-center justify-center ">
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
