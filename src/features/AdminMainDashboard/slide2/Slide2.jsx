import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMetrics } from "./store/action";
import { Card } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Metrics from "./Metrics";


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

const Slide2 = () => {
  const dispatch = useDispatch();
  const [currentWeekStart, setCurrentWeekStart] = React.useState(
    getMonday(new Date())
  );
  const { analytics, statistics } = useSelector((state) => state.metric);

  const monday = currentWeekStart;
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  useEffect(() => {
    dispatch(getMetrics({ monday, sunday }));
  }, [dispatch, currentWeekStart]);

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

  const graphics = [
    {
      value: analytics.new_visitors_percentage,
      name: "A",
      title: "Новые посетители",
      color: "#dc2626",
      tw: "text-red-600",
    },
    {
      value: analytics.returning_visitors_percentage,
      name: "B",
      title: "Повторные посетители",
      color: "blue",
      tw: "text-blue-600",
    },
  ];
  return (
    <div className={`h-auto lg:h-[520px] bg-[#222224] text-white w-[90%]`}>
      {globalStyles}
      <Card className="!bg-[#222224] !shadow-none">
        <div className="flex flex-col lg:flex-row px-4 lg:px-10 py-1">
          <FilterDate
            width={27}
            onClickNext={() => updateWeek(7)}
            onClickPrev={() => updateWeek(-7)}
            dateTitle={`${formatDate(monday)} - ${formatDate(sunday)}`}
          />
        </div>
        <Metrics items={statistics} />
      </Card>

      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-10 py-5 gap-5">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="bg-[#1d1d1d] text-center px-8 py-4">
            <p>Посещения</p>
            <span>{analytics.total_visits}</span>
          </div>
          <div className="bg-[#1d1d1d] text-center px-8 py-4">
            <p>Просмотр страницы</p>
            <span>{analytics.total_page_views}</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 bg-[#1d1d1d] p-4 w-full lg:w-auto">
          <div className="flex flex-col gap-5">
            <h1>Тип посетителей</h1>
            <ul className="flex flex-col">
              {graphics.map((obj, i) => (
                <li
                  key={i}
                  className={`${obj.tw} flex justify-between w-full lg:w-36`}
                >
                  <p>{obj.title}:</p> <span>{obj.value}%</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
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
    </div>
  );
};

export default Slide2;

const size = {
  width: 143,
  height: 143,
};
