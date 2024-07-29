import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import SelectAutoWidth from "./SelectAutoWidth";

import Rooms from "../../../shared/assets/svg/Rooms.svg";
import baths from "../../../shared/assets/svg/Baths.svg";
import bedroom from "../../../shared/assets/svg/Bedroom.svg";
import kitchen from "../../../shared/assets/svg/kitchen.svg";
import Garage from "../../../shared/assets/svg/Garage.svg";
import plus from "../../../shared/assets/svg/upload.svg";
import { postHouse } from "../store/action";
import CustomCheckbox from "./CheckboxUI";
import { checkboxArray } from "../store/data";

const PenModal = ({ handleClosePen }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    dispatch(
      postHouse({
        ...data,
        ...checkboxState,
        images: [{ image: selectedImage }],
        rooms: [{ count: data.rooms }],
        bathrooms: [{ count: data.bathrooms }],
        bedrooms: [{ count: data.bedrooms }],
        kitchens: [{ count: data.kitchens }],
        garages: [{ count: data.garages }],
        category: "Дома",
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
      <div className="w-[220px] h-[40px] bg-[#131313] text-[#B3B3B3] rounded-md p-1 mb-4 flex items-center mt-4">
        <label className="ml-2 cursor-pointer w-full flex items-center">
          <img
            src={selectedImage || plus}
            alt="img"
            className="w-[20px] h-[20px] mr-2"
          />
          <p className="text-xs">Добавить фото</p>
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
      </div>

      <div className="flex gap-2">
        <div className="relative">
          <input
            type="text"
            className="w-[220px] h-[60px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 mb-4 placeholder-[#B3B3B3]"
            placeholder="Добавить заголовок..."
            {...register("title")}
          />
          <input
            type="text"
            className="w-[220px] h-[60px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 mb-4 placeholder-[#B3B3B3]"
            placeholder="Добавить заголовок..."
            {...register("city")}
          />
          {/* {!title && (
            <span className="absolute top-2 left-2 text-[#B3B3B3] pointer-events-none transition-all duration-200 ease-in-out">
              Добавить заголовок...
            </span>
          )} */}
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="w-[280px] h-[30px] bg-[#131313] text-[#B3B3B3] rounded-md p-2"
            placeholder="Площадь (м2)"
            {...register("square_footage")}
          />
          <div className="relative">
            <input
              type="text"
              className="w-[280px] h-[30px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 pl-8"
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
        <input
          type="text"
          className="w-full h-[30px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 mb-4"
          placeholder="Описание"
          {...register("description")}
        />
      </div>
      <div className="pt-4">
        <h2>Удобства</h2>
        <div className="grid grid-cols-4 gap-1 my-2">
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

      <div className="flex mt-3 gap-2">
        <button
          type="submit"
          className="bg-[#C8180C] text-white w-[110px] h-[40px] rounded-full"
        >
          Добавить
        </button>

        <button
          onClick={handleClosePen}
          type="button"
          className="bg-[#131313] text-white w-[110px] h-[40px] rounded-full"
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default PenModal;
