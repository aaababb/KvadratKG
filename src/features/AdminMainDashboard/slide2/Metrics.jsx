import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { GlobalStyles } from "@mui/material";

const globalStyles = (
  <GlobalStyles
    styles={{
      ".MuiChartsAxis-root .MuiChartsAxis-tickLabel": {
        fill: "rgba(255, 255, 255, 1) !important", // Применяем белый цвет текста
      },
      ".MuiChartsAxis-root .MuiChartsAxis-axisLabel": {
        fill: "rgba(255, 255, 255, 1) !important", // Применяем белый цвет меток оси
      },
      ".css-wn5hww-MuiLineElement-root": {
        stroke: "red !important",
      },
      ".css-1la267r-MuiAreaElement-root": {
        fill: "rgb(100,60,150,.1) !important",
      },
    }}
  />
);

const Metrics = () => {
  return (
    <>
      {globalStyles}
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
        series={[
          {
            curve: "linear",
            data: [2, 5.5, 2, 8.5, 1.5, 5, 3.5, 6, 9, 6.5],
            data: [12, 15.5, 12, 18.5, 11.5, 15, 13.5, 16, 19, 16.5],
            area: true,
            showMark: true,
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
        height={250}
      />
    </>
  );
};

export default Metrics;
