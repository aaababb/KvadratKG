import React from "react";
import { Box, styled } from "@mui/material";
import back from "../../../shared/assets/svg/back.svg";
import PenModal from "./PenModal";
import { useNavigate } from "react-router-dom";

const ModalHouse = () => {
  const navigate = useNavigate();
  return (
    <ModalStyle>
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
          onClick={() => navigate("/admin/real-estate")}
          style={{ cursor: "pointer" }}
        />
        <PenModal />
      </Box>
    </ModalStyle>
  );
};

export default ModalHouse;

const ModalStyle = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1110,
});
