import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import SelectAutoWidth from "./SelectAutoWidth";
import AddIcon from "@mui/icons-material/Add";

import Rooms from "../../../shared/assets/svg/Rooms.svg";
import baths from "../../../shared/assets/svg/Baths.svg";
import bedroom from "../../../shared/assets/svg/Bedroom.svg";
import kitchen from "../../../shared/assets/svg/kitchen.svg";
import Garage from "../../../shared/assets/svg/Garage.svg";
import { postHouse } from "../store/action";
import CustomCheckbox from "./CheckboxUI";
import upload from "../../../shared/assets/svg/upload.svg";
const PenModal = ({ handleClosePen }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = [];

    files.forEach((file) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push({
            image: [reader.result],
          });
          if (newImages.length === files.length) {
            setImages((prevImages) => [...prevImages, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const [checkboxState, setCheckboxState] = useState({
    pool: false,
    gym: false,
    garage: false,
    parking: false,
    garden: false,
    fireplace: false,
    elevator: false,
    clubhouse: false,
  });

  const onCheckboxChange = (name) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const setArray = (item) => {
    return [{ count: item }];
  };

  const onSubmit = (data) => {
    dispatch(
      postHouse({
        ...data,
        ...checkboxState,
        images: images,
        rooms: setArray(data.rooms),
        bathrooms: setArray(data.bathrooms),
        bedrooms: setArray(data.bedrooms),
        kitchens: setArray(data.kitchens),
        garages: setArray(data.garages),
        category: "Дома",
        city: "Бишкек",
      })
    );
    // handleClosePen();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-white ml-4">
      <div className="w-[680px] h-[50px] -mt-8 rounded-t-lg rounded-md bg-[#C8180C] relative ml-[-48px] pt-[20px]">
        <p className="ml-10 w-[500px] h-[30px]">
          Создать новую карточку для недвижимости
        </p>
      </div>
      <div className=" bg-[#131313] text-[#B3B3B3] rounded-md p-1 mb-4 flex items-center mt-4 gap-5">
        <label className="cursor-pointer w-[150px] h-[50px] px-3 rounded-md flex items-center text-center bg-[#262626]">
          <img src={upload} alt="upload" />
          <p className="text-xs">Добавить фото</p>
          <input
            type="file"
            className="hidden"
            onChange={handleImageChange}
            multiple
          />
        </label>

        <div
          className={`flex gap-4 bg-[#262626] p-[10px] rounded-lg mw-[500px] overflow-auto scroll-container-x ${
            images.length === 0 && "hidden"
          }`}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img.image[0]}
              alt={`img-${index}`}
              className="w-[45px] h-[45px] "
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <div className="relative">
          <textarea
            type="text"
            className="w-[290px] h-[80px] resize-none bg-[#131313] text-[#B3B3B3] rounded-md p-2 pl-5 placeholder-[#B3B3B3] border-2 border-gray-600"
            placeholder="Добавить заголовок..."
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="w-[290px] h-[30px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 pl-5 border-2 border-gray-600"
            placeholder="Площадь (м2)"
            {...register("square_footage")}
          />
          <div className="relative">
            <input
              type="text"
              className="w-[290px] h-[30px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 pl-5  border-2 border-gray-600"
              placeholder="Цена"
              {...register("price")}
            />
          </div>
        </div>
      </div>

      <h4>Информация для детальной страницы</h4>
      <div className="flex mt-4">
        <div className="w-[20%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Комнаты</p>
            <img className="ml-2" width={16} src={Rooms} alt="Rooms" />
          </div>
          <SelectAutoWidth count={5} register={register} name="rooms" />
        </div>
        <div className="w-[20%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Ванна</p>
            <img className="ml-2" width={16} src={baths} alt="bathrooms" />
          </div>
          <SelectAutoWidth count={5} register={register} name="bathrooms" />
        </div>
        <div className="w-[20%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Спальня</p>
            <img className="ml-2" width={16} src={bedroom} alt="Bedroom" />
          </div>
          <SelectAutoWidth count={5} register={register} name="bedrooms" />
        </div>
        <div className="w-[20%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Кухня</p>
            <img className="ml-2" width={16} src={kitchen} alt="kitchens" />
          </div>
          <SelectAutoWidth count={5} register={register} name="kitchens" />
        </div>
        <div className="w-[20%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Гараж</p>
            <img className="ml-2" width={16} src={Garage} alt="garages" />
          </div>
          <SelectAutoWidth count={5} register={register} name="garages" />
        </div>
      </div>

      <div className="mt-4">
        <textarea
          type="text"
          className="w-full resize-none bg-[#131313] text-[#B3B3B3] rounded-md p-2 mb-4 border-2 border-gray-600"
          placeholder="Описание"
          {...register("description")}
        />
      </div>
      <div className="pt-4">
        <h2>Удобства</h2>
        <div className="grid grid-cols-4 gap-[6px] my-2">
          <CustomCheckbox
            name="pool"
            title={"Бассейн"}
            checked={checkboxState.pool}
            onChange={() => onCheckboxChange("pool")}
          />
          <CustomCheckbox
            name="gym"
            title={"Тренажерный зал"}
            checked={checkboxState.gym}
            onChange={() => onCheckboxChange("gym")}
          />
          <CustomCheckbox
            name="garage"
            title={"Гараж"}
            checked={checkboxState.garage}
            onChange={() => onCheckboxChange("garage")}
          />
          <CustomCheckbox
            name="parking"
            title={"Парковка"}
            checked={checkboxState.parking}
            onChange={() => onCheckboxChange("parking")}
          />
          <CustomCheckbox
            name="garden"
            title={"Сад"}
            checked={checkboxState.garden}
            onChange={() => onCheckboxChange("garden")}
          />
          <CustomCheckbox
            name="fireplace"
            title={"Камин"}
            checked={checkboxState.fireplace}
            onChange={() => onCheckboxChange("fireplace")}
          />
          <CustomCheckbox
            name="elevator"
            title={"Лифт"}
            checked={checkboxState.elevator}
            onChange={() => onCheckboxChange("elevator")}
          />
          <CustomCheckbox
            name="clubhouse"
            title={"Клубный зал"}
            checked={checkboxState.clubhouse}
            onChange={() => onCheckboxChange("clubhouse")}
          />
        </div>
      </div>

      <div className="flex m-3 gap-2">
        <button
          type="submit"
          className="bg-[#C8180C] text-white w-[110px] h-[40px] rounded-full"
        >
          <AddIcon />
          Добавить
        </button>

        <button
          onClick={handleClosePen}
          type="button"
          className="bg-[#262626] text-white w-[110px] h-[40px] rounded-full"
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default PenModal;
