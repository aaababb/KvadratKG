import React, { useEffect, useRef, useState } from "react";
import ExpandMoreTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

function MenuSort() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selName, setSelName] = useState(null);
  const sortRef = useRef();
  const options = ["По популярности", "По цене", "По площади", "По названию"];

  const handleName = (name, index) => {
    setSelName(name);
    setSelectedIndex(index);
    setOpen(false);
  };

  useEffect(() => {
    const handleClick = (event) => {
      const path = event.composedPath ? event.composedPath() : event.path;
      if (path && !path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={sortRef} className="relative flex flex-col items-center gap-1">
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-[150px] sm:w-[200px] md:w-[250px] lg:w-[221px] rounded-full py-2 px-2 sm:px-4 md:px-5 ${
          open ? "bg-red-600 text-white" : "bg-red-600 text-white "
        } cursor-pointer border border-red-600`}
      >
        <p
          className={`${
            selName === "Коммерческое недвижимость"
              ? "text-xs whitespace-nowrap"
              : "text-md"
          }`}
        >
          {selName || "по умолчанию"}
        </p>
        {open ? (
          <ExpandMoreTwoToneIcon className="text-black" />
        ) : (
          <ExpandMoreSharpIcon />
        )}
      </div>
      {open && (
        <div className="absolute top-full mt-1 flex flex-col lg:w-[221px] w-[150px] sm:w-[200px] md:w-[250px] bg-red-600  text-white z-10 border border-red-600 rounded-b-[35px] rounded-t-lg  ">
          {options.map((item, index) => (
            <p
              key={index}

              onMouseEnter={() => hoverOption(index)}
              onClick={() => handleName(item)}
              className={`hover:text-white hover:bg-red-600 w-full py-3 px-4 whitespace-nowrap ${
                index === options.length - 1 ? "rounded-b-[35px]" : ""
              } ${
                item === "Коммерческое недвижимость"
                  ? "text-[14px] font-normal"
                  : "font-normal"
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuSort;
