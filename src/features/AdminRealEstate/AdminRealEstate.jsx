import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { getHouses } from "./store/action";
import PenModal from "./components/PenModal";

import AddIcon from "@mui/icons-material/Add";
import back from "../../shared/assets/svg/back.svg";
import pen from "../../shared/assets/svg/pen.svg";
import trash from "../../shared/assets/svg/trash.svg";
import upload from "../../shared/assets/svg/upload.svg";

const AdminRealEstate = () => {
  const [openPen, setOpenPen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenPen = () => setOpenPen(true);
  const handleClosePen = () => setOpenPen(false);
  const { items } = useSelector((state) => state.houses);
  console.log(items);

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
                padding: "10px 20px",
              }}
              key={obj.id}
            >
              <div className="w-[150px] h-[90px] overflow-hidden">
                <img
                  className={
                    obj.images[0]?.image
                      ? "w-full h-full object-cover"
                      : "w-50px h-full object-cover m-auto"
                  }
                  src={obj.images[0]?.image ? obj.images[0]?.image : upload}
                  alt="Photos"
                />
              </div>
              <p className="w-[190px]">
                {obj.title || "3 - комнатная квартира на улице Киевская 30"}
              </p>
              <p className="w-[220px]">
                {`Площадь: ${obj.square || "м2.77.3"} Планировка: ${
                  obj.plan || "ИФ-1(А)-036"
                }`}
              </p>
              <p>{obj.price || "12млн.$"}</p>
              <div className="flex gap-3">
                <img src={trash} alt="Trash" />
                <img src={pen} alt="Pen" style={{ cursor: "pointer" }} />
              </div>
            </Box>
          ))}
        </>
      );
    } else {
      return <div>Houses is not an array</div>;
    }
  };

  React.useEffect(() => {
    dispatch(getHouses());
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "94%",
          margin: "10px 0",
          padding: "0 10px",
        }}
      >
        <h1 className="text-white text-2xl">Публикация недвижимости</h1>

        <button
          onClick={handleOpenPen}
          className="w-[215px] h-[57px] bg-[#C8180C] text-white rounded-[30px] flex items-center justify-center gap-3"
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
        {ItemRender()}
      </Box>
      <Modal open={openPen} onClose={handleClosePen}>
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 680,
            height: 640,
            bgcolor: "black",
            border: "1px solid #262626",
            boxShadow: 66,
            outline: "none",
            borderRadius: "12px",
            p: 4,
          }}
        >
          <img
            src={back}
            alt="Back"
            onClick={handleClosePen}
            style={{ cursor: "pointer" }}
          />
          <PenModal handleClosePen={handleClosePen} />
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminRealEstate;
