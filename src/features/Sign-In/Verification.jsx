import React from "react";
import { Link } from "react-router-dom";

function Verification() {
  return (
    <div className="m-auto w-[40%] pt-[100px]">
      <h1 className="text-2xl font-semibold text-center text-white mb-[30px]">ВОЙТИ</h1>
      <div className="bg-[#1A1A1A] border flex flex-col items-center gap-[40px] py-[53px]  px-[24px] rounded-md ">
        <span className="text-center text-white ">
          На электронную почту <a className="text-blue-500" href="mailto:asanov@gmail.com ">asanov.gmail.com</a> отправлено письмо. Пожалуйста
          откройте его для завершения регистрации
        </span>
        <Link to="/admin/sign-in">
          <button className=" border px-[100px]  text-center text-gray-300  rounded-md border-[2px] border-gray-500 hover:bg-white hover:text-black align-center py-[10px] ">
            ВЕРНУТЬСЯ
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Verification;
