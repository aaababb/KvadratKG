import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { styled } from "@mui/material";

const Metrics = () => {
  return (
    <LineChartStyle
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
  );
};
export default Metrics;

const LineChartStyle = styled(LineChart)(({ theme }) => ({
  "& .MuiChartsAxis-root .MuiChartsAxis-tickLabel": {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
    fill: "rgba(255, 255, 255, 1)", // Меняем цвет текста на белый
  },
}));
