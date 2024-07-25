import React, { useState } from "react";
import photoos from "../../shared/assets/svg/photoos.svg";
import trash from "../../shared/assets/svg/trash.svg";
import pen from "../../shared/assets/svg/pen.svg";
import { Box, Modal } from "@mui/material";
import PenModal from "./PenModal";
import back from "../../shared/assets/svg/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from "./store/action";

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
                marginTop: "25px",
                alignItems: "center",
              }}
              key={obj.id}
            >
              <img src={obj.images ? obj.images[0] : photoos} alt="Photos" />
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
    <Box className="border border-red-400">
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
        <p>
          Описание : <br /> Площадь / Планировка
        </p>
        <p>Цена</p>
        <p>Действие</p>
      </Box>

      <Box
        onClick={handleOpenPen}
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "94%",
          // border: '1px solid red'
        }}
      >
        <button className="w-[215px] h-[57px] bg-[#C8180C] text-white rounded-[30px] text-center mt-[25px]">
          Добавить
        </button>
      </Box>

      <Box>{ItemRender()}</Box>
      <Modal open={openPen} onClose={handleClosePen}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            height: 600,
            bgcolor: "black",
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
          <PenModal />
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminRealEstate;
