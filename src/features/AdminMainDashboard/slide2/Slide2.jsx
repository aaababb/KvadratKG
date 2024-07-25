import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMetrics } from "./store/action";
import { Card } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Metrics from "./Metrics";
import axios from "axios";

import { GlobalStyles } from "@mui/material";
import FilterDate from "./FIlterDate";

const globalStyles = (
  <GlobalStyles
    styles={{
      "@keyframes rotate": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      "& .css-1mhcdve-MuiPieArc-root": {
        stroke: "black !important",
      },
    }}
  />
);
const graphics = [
  {
    value: 45,
    name: "A",
    title: "Автоматы",
    color: "#dc2626",
    tw: "text-red-600",
  },
  {
    value: 35,
    name: "B",
    title: "Вертолеты",
    color: "blue",
    tw: "text-blue-600",
  },
  {
    value: 20,
    name: "C",
    title: "Танки",
    color: "green",
    tw: "text-green-600",
  },
];

const Slide2 = () => {
  const dispatch = useDispatch();
  const [currentWeekStart, setCurrentWeekStart] = React.useState(
    getMonday(new Date())
  );
  const metrics = useSelector((state) => state.metric.metrics);
  console.log(metrics);

  useEffect(() => {
    dispatch(getMetrics({ monday, sunday }));
  }, [dispatch]);

  function getMonday(date) {
    date = new Date(date);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }
  function formatDate(date) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("ru-RU", options);
  }
  function updateWeek(offset) {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(currentWeekStart.getDate() + offset);
    setCurrentWeekStart(newWeekStart);
  }
  const monday = currentWeekStart;
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return (
    <div className={`h-[520px]  bg-[#222224] text-white w-[90%]`}>
      {globalStyles}
      <Card className="!bg-[#222224] !shadow-none">
        <div className="flex px-10 py-1">
          <FilterDate
            width={27}
            onClickNext={() => updateWeek(7)}
            onClickPrev={() => updateWeek(-7)}
            dateTitle={`${formatDate(monday)} - ${formatDate(sunday)}`}
          />
        </div>
        <Metrics />
      </Card>

      <div className="flex justify-between px-10 py-5">
        <div className="flex gap-2">
          <div className="bg-[#1d1d1d] text-center px-8 py-4">
            <p>Посещения</p>
            <span>266</span>
          </div>
          <div className="bg-[#1d1d1d] text-center px-8 py-4">
            <p>Просмотр страницы</p>
            <span>490</span>
          </div>
        </div>
        <div className="flex gap-5 bg-[#1d1d1d] p-4">
          <div className="flex flex-col gap-5">
            <h1>Тип посетителей</h1>
            <ul className="flex flex-col">
              {graphics.map((obj, i) => (
                <li key={i} className={`${obj.tw} flex justify-between w-36`}>
                  <p>{obj.title}:</p> <span>{obj.value}%</span>
                </li>
              ))}
            </ul>
          </div>
          <PieChart
            width={120}
            height={120}
            series={[
              {
                data: graphics,
                innerRadius: 20,
                outerRadius: 70,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: 0,
                endAngle: 360,
                cx: 67,
                cy: 67,
              },
            ]}
            {...size}
          />
        </div>
      </div>
    </div>
  );
};

export default Slide2;

const size = {
  width: 143,
  height: 143,
};
