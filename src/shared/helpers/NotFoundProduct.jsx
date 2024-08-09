import React from "react";
import NoData from "../assets/img/NoData.png";
import { Box } from "@mui/material";

const NotFoundProduct = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px",
      }}
    >
      <img src={NoData} alt="no data" className="w-[200px] h-[230px]" />
      <p className="text-2xl text-white">{title}</p>
      <p className="text-white">Попробуйте изменить параметры поиска</p>
    </Box>
  );
};

export default NotFoundProduct;
