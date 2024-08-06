import React from "react";
import { Box, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PenModal from "./PenModal";

const ModalHouse = () => {
  const theme = useTheme();
  return (
    <ModalStyle>
      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 680,
          height: 680,
          bgcolor: "black",
          border: "2px solid gray",
          boxShadow: 66,
          outline: "none",
          borderRadius: "12px",
          p: 4,
          [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "auto",
            padding: "32px 4px",
          },
        }}
      >
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
