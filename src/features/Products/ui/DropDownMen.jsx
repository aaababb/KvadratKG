import React, { useEffect, useRef } from "react";
import ExpandMoreTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

function DropDownMen() {
  const [open, setOpen] = React.useState(false);
  const [setOption] = React.useState();
  const [selName, setSelName] = React.useState();
  const sortRef = useRef();
  const options = ["Дома", "Квартиры","Коммерческое недвижимость", "Участки" ];
  
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
        console.log("click outside");
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
        className={`flex   items-center justify-between w-[150px] sm:w-[200px] md:w-[250px] lg:w-[283px] rounded-full py-2 px-2 sm:px-4 md:px-5 lg:px-7   ${
          open ? "bg-white text-zinc-950" : "bg-red-600 text-white"
        }`}
      >
        <p className={` ${selName === "Коммерческое недвижимость" ? "text-sm " : "text-md"}`}>{selName || "Категории"}</p>
        {open ? (
          <ExpandMoreTwoToneIcon className="text-black" />
        ) : (
          <ExpandMoreSharpIcon />
        )}
      </div>
      {open && (
        <div className="flex flex-col flex-wrap lg:w-[283px] w-[150px] sm:w-[200px] md:w-[250px] absolute z-10  mt-[45px] items-start bg-white rounded-t-md rounded-b-[35px]  ">
          {options.map((item, index) => (
            <p
              key={index}
              onMouseEnter={() => hoverOption(index)}
              onClick={() => handleName(item)}
              className={`hover:text-white hover:bg-red-600 w-full py-3 px-4 ${
                index === options.length - 1 ? "rounded-b-[35px]" : ""
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

export default DropDownMen;
