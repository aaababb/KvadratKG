import React from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHouses } from "./store/action";
import { Status } from "./store/slice";

import AddIcon from "@mui/icons-material/Add";
import pen from "../../shared/assets/svg/pen.svg";
import trash from "../../shared/assets/svg/trash.svg";
import upload from "../../shared/assets/svg/upload.svg";
import NotFoundProduct from "../../shared/helpers/NotFoundProduct";
import { replaceUrlPart } from "../../utils";
import AdminProSkeleton from "../../shared/helpers/AdminProSkeleton";

const AdminRealEstate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, count,status } = useSelector((state) => state.houses);


  const skeletonsList = [...new Array(4)].map((_, i) => (
    <div
      className=""
      key={i}
    >
      <AdminProSkeleton />
    </div>
  ));

  const ItemRender = () => {
    if (Array.isArray(items)) {
      return (
        <>
        
          {items.map((obj) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "94%",
                color: "white",
                alignItems: "center",
                backgroundColor: "#262626",
                padding: 2,
                fontSize: {xs:'10px', md: '20px'}
              }}
              key={obj.id}
            >
              <div className="w-[100px] h-[50px] md:w-[150px] md:h-[90px] flex items-center justify-start overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={obj.image ? replaceUrlPart(obj.image) : upload}
                  alt="Photos"
                />
              </div>
              <p className="w-[110px] h-[50px] md:w-[210px] md:h-[90px] text-[8px] md:text-[18px] flex items-center justify-center">
                {obj.title || "title is not definded"}
              </p>
              <p className="w-[100px] h-[50px] text-[8px] md:text-[18px] md:w-[200px] md:h-[90px] flex items-center justify-start">
                {`Площадь: ${obj.square_footage || "м2.77.3"}
                }`}
              </p>
              <p className="w-[100px] h-[50px] text-[8px] md:text-[18px] md:w-[180px] md:h-[90px] flex items-center justify-center">{obj.price || "12млн.$"}</p>
              <div className="h-50px md:h-[90px] flex items-center justify-center gap-5">
                <img
                  src={pen}
                  onClick={() => navigate(`/admin/modal/${obj.id}`)}
                  alt="Pen"
                  className="cursor-pointer w-[15px] h-[15px] md:w-[30px] md:h-[30px] hover:scale-125 transition-transform duration-150 pen-icon"
                />
                <img
                  src={trash}
                  alt="Trash"
                  className="cursor-pointer w-[15px] h-[15px] md:w-[30px] md:h-[30px] hover:scale-125 transition-transform duration-150 pen-icon"
                />
              </div>
            </Box>
          ))}
        
        </>
      );
    } else {
      return <div>Houses is not an array</div>
    }
  };

  

  React.useEffect(() => {
    dispatch(getHouses({ params: null, page: 0 }));
  }, []);

  return (
    <>
    <Box sx={{
      paddingLeft: {xs:'30px', md:'70px'}
    }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "94%",
          margin: "10px 0",
          padding: "0 10px",
          
        }}
      >
        <h1 className="text-white text-sm md:text-2xl">Публикация недвижимости</h1>

        <button
          onClick={() => navigate("/admin/modal")}
          className="text-[10px] h-[25px] md:text-[17px] w-[150px] md:w-[215px] md:h-[57px] bg-[#C8180C] text-white rounded-[30px] flex items-center justify-center gap-3"
        >
          <AddIcon />
          Добавить
        </button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "94%",
          color: "white",
          padding: 2,
          backgroundColor: "rgba(38, 38, 38, 1)",
          fontSize: {xs:'10px', md: '20px'}
        }}
      >
        <p>Фотографии</p>
        <p>Заголовок</p>
        <p>Площадь кв/м2</p>
        <p>Цена</p>
        <p>Действие</p>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {count > 0 ? ItemRender() : <NotFoundProduct title="Пока нет недвижимости" />}
      </Box>
    </Box>
    </>
  );
};

export default AdminRealEstate;
