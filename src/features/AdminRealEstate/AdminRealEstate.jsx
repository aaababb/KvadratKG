import React, { useState } from "react";
import photoos from "../../shared/assets/svg/photoos.svg";
import trash from "../../shared/assets/svg/trash.svg";
import pen from "../../shared/assets/svg/pen.svg";
import { Box, Modal } from "@mui/material";
import PenModal from "./PenModal";
import back from '../../shared/assets/svg/back.svg';

const AdminRealEstate = () => {
  const [openPen, setOpenPen] = useState(false);

  const handleOpenPen = () => setOpenPen(true);
  const handleClosePen = () => setOpenPen(false);

  return (
    <Box>
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
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "94%",
          color: "white",
          marginTop: "50px",
        
          alignItems: "center",
        }}
      >
        <img src={photoos} alt="Photos" />
        <p className="w-[190px]">3 - комнатная квартира на улице Киевская 30</p>
        <p className="w-[220px]">Площадь: м2.77.3 Планировка: ИФ-1(А)-036</p>
        <p>12млн.$</p>
        <div className="flex gap-3">
          <img src={trash} alt="Trash" />
          <img
            src={pen}
            alt="Pen"
            onClick={handleOpenPen}
            style={{ cursor: "pointer" }}
          />
        </div>
      </Box>
      <Modal open={openPen} onClose={handleClosePen}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 900,
            height: 600,
            bgcolor: 'black',
            boxShadow: 66,
            outline: 'none',
            borderRadius: '12px',
            p: 4,
          }}
        >
          <img 
            src={back} 
            alt="Back" 
            onClick={handleClosePen} 
            style={{ cursor: 'pointer' }}
          />
          <PenModal />
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminRealEstate;
