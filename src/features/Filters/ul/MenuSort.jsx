import React, { useEffect, useRef } from "react";
import ExpandMoreTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

function MenuSort() {
  const [open, setOpen] = React.useState(false);
  const [setOption] = React.useState();
  const [selName, setSelName] = React.useState();
  const sortRef = useRef();
  const options = ["По популярности", "По цене", "По площади", "По названию"];

  const hoverOption = (index) => {
    setOption(index);
  };
  const handleName = (name) => {
    setSelName(name);
    setOpen(false);
  };

  useEffect(() => {
    const handleClick = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
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
    <div ref={sortRef} className="flex flex-col items-center gap-1 ">
      <div
        onClick={() => setOpen(!open)}
        className={`flex   items-center justify-between w-[150px] sm:w-[200px] md:w-[250px] lg:w-[221px] rounded-full py-2 px-2 sm:px-4 md:px-5    ${
          open ? "bg-white text-zinc-950" : "bg-red-600 text-white"
        }`}
      >
        <p
          className={` ${
            selName === "Коммерческое недвижимость"
              ? "text-xs whitespace-nowrap "
              : " lg:px-2 text-md"
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
        <div className="flex flex-col flex-wrap lg:w-[221px] w-[150px] sm:w-[200px] md:w-[250px] absolute z-10  mt-[45px] items-start bg-white rounded-t-md rounded-b-[35px]  text-black">
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
