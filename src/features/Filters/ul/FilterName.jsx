import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const FilterName = () => {
  const filter = [
    "Квартира",
    "Виллы",
    "$50k-$125k",
    "Квартира",
    "Виллы",
    "$50k-$125k",
  ];

  return (
    <div className="text-white ">
      <p className="mb-3">Активный фильтр</p>
      <div className="flex items-center justify-between gap-2 ">
        <div className="flex gap-4 lg:w-[550px] xl:w-full w-full md:w-[290px]  overflow-x-auto ">
          {filter.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-4 py-2 text-white bg-red-600 rounded-full shrink-0 whitespace-nowrap"
            >
              <p className="text-xs sm:text-sm md:text-lg">{item}</p>
              <ClearIcon sx={{ width: 15, height: 15 }} />
            </div>
          ))}
        </div>
        <div className="relative inline-block whitespace-nowrap">
          <span className="hidden text-white md:block">очистить все</span>
          <div className="absolute bottom-0 left-0 w-full border-b border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default FilterName;
