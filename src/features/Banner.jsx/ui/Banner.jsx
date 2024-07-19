import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getHeadings } from "../store/action";
import img from "../../../shared/assets/img/banner_home.png";
import Container from "../../../shared/helpers/Container";
import check from "../../../shared/assets/svg/chekcbox.svg";
import insta from "../../../shared/assets/svg/insta.svg";
import whatsapp2 from "../../../shared/assets/svg/whatsap2.svg";
import telegram3 from "../../../shared/assets/svg/telega5.svg";
import telegram2 from "../../../shared/assets/svg/telega2.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "http://192.168.68.108:8000/headings/"

function Banner() {
  // const dispatch = useDispatch();
  // const { headings, isLoading, error } = useSelector((state) => state.heading);
  const texts = [
    "Юридические чистые объекты",
    "Вся ответственность на нас по договору",
    "Поиск, подбор, продажа - все под ключ",
  ];

  async function getHeadings() {
    try{
      const res = await axios.get(API, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    getHeadings()
  },[])


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

              <Link to="https://web.telegram.org/a/">
                <button className="px-8 py-3 text-white bg-red-700 rounded-full hover:bg-red-600">
                  Получить консультацию от риэлтора
                </button>
                </Link>
                <div className="flex items-center gap-4 px-10 py-3 text-white bg-red-600 rounded-full">
                  <Link to="https://web.telegram.org/a/">
                    <div className="relative flex items-center justify-center cursor-pointer">
                      <img src={telegram3} alt="telegram" className="w-9 h-9" />
                      <img
                        src={telegram2}
                        alt="telegram2"
                        className="absolute"
                      />
                    </div>
                  </Link>
                  <hr className="w-px h-6 bg-gray-400 " />
                  <Link to="https://web.whatsapp.com/">
                    <img
                      src={whatsapp2}
                      alt="whatsapp"
                      className="cursor-pointer w-9 h-9"
                    />
                  </Link>
                  <hr className="w-px h-6 bg-gray-400" />
                  <Link to="https://www.instagram.com/">
                    <img
                      src={insta}
                      alt="instagram"
                      className="cursor-pointer w-9 h-9"
                    />
                  </Link>
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
