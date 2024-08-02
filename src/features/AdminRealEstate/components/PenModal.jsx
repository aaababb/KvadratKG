import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import SelectAutoWidth from "./SelectAutoWidth";
import AddIcon from "@mui/icons-material/Add";

import { getHouseById, postHouse, patchHouse } from "../store/action";
import { itemClear } from "../store/slice";

import Rooms from "../../../shared/assets/svg/Rooms.svg";
import baths from "../../../shared/assets/svg/Baths.svg";
import bedroom from "../../../shared/assets/svg/Bedroom.svg";
import kitchen from "../../../shared/assets/svg/kitchen.svg";
import Garage from "../../../shared/assets/svg/Garage.svg";
import CustomCheckbox from "./CheckboxUI";
import upload from "../../../shared/assets/svg/upload.svg";

const PenModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { houseId } = useParams();
  const isEditing = !!houseId;
  const cancel = () => {
    navigate("/admin/real-estate");
    dispatch(itemClear());
  };

  React.useEffect(() => {
    dispatch(itemClear());
    if (isEditing) {
      dispatch(getHouseById(houseId));
    }
  }, [houseId, dispatch]);

  const house = useSelector((state) => state.houses.item);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditing ? house : {},
  });
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [image, setImage] = React.useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const [checkboxState, setCheckboxState] = React.useState({
    pool: house.pool || false,
    gym: house.gym || false,
    garage: house.garage || false,
    parking: house.parking || false,
    garden: house.garden || false,
    fireplace: house.fireplace || false,
    elevator: house.elevator || false,
    clubhouse: house.clubhouse || false,
    laundry: house.laundry || false,
    area: house.area || false,
  });

  const onCheckboxChange = (name) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      ...checkboxState,
      image: image,
      category: "Дома",
      city: "Бишкек",
    };
    if (isEditing) {
      dispatch(
        patchHouse({
          data: formData,
          id: houseId,
          navigate,
        })
      );
    } else {
      dispatch(
        postHouse({
          data: formData,
          navigate,
        })
      );
    }
  };

  React.useEffect(() => {
    if (house) {
      reset(house);
    }
  }, [house, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-white ml-4">
      <div className="w-[680px] h-[50px] -mt-8 rounded-t-lg rounded-md bg-[#C8180C] relative ml-[-48px] pt-[20px]">
        <p className="ml-10 w-[500px] h-[30px]">
          Создать новую карточку для недвижимости
        </p>
      </div>
      <div className=" bg-[#131313] text-[#B3B3B3] rounded-md p-1 mb-4 flex items-center mt-4 gap-5">
        <label className="ml-2 cursor-pointer w-full flex items-center">
          <img
            src={selectedImage || upload}
            alt="img"
            className="w-[20px] h-[20px] mr-2"
          />
          <p className="text-xs">Добавить фото</p>
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
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
            type="number"
            className="w-[290px] h-[30px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 pl-5 border-2 border-gray-600"
            placeholder="Площадь (м2)"
            {...register("square_footage")}
          />
          <div className="relative">
            <input
              type="number"
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
          <SelectAutoWidth
            count={5}
            register={register}
            name="rooms"
            defaultValue={house.rooms}
          />
        </div>
        <div className="w-[20%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Ванна</p>
            <img className="ml-2" width={16} src={baths} alt="bathroom" />
          </div>
          <SelectAutoWidth
            count={5}
            register={register}
            name="bathroom"
            defaultValue={house.bathroom}
          />
        </div>
        <div className="w-[20%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Спальня</p>
            <img className="ml-2" width={16} src={bedroom} alt="Bedroom" />
          </div>
          <SelectAutoWidth
            count={5}
            register={register}
            name="bedrooms"
            defaultValue={house.bedrooms}
          />
        </div>
        <div className="w-[20%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Кухня</p>
            <img className="ml-2" width={16} src={kitchen} alt="kitchen" />
          </div>
          <SelectAutoWidth
            count={5}
            register={register}
            name="kitchen"
            defaultValue={house.kitchen}
          />
        </div>
        <div className="w-[20%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Гараж</p>
            <img
              className="ml-2"
              width={16}
              src={Garage}
              alt="garage_how_many"
            />
          </div>
          <SelectAutoWidth
            count={5}
            register={register}
            name="garage_how_many"
            defaultValue={house.garage_how_many}
          />
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
          <CustomCheckbox
            name="clubhouse"
            title={"Прачечная"}
            checked={checkboxState.laundry}
            onChange={() => onCheckboxChange("laundry")}
          />
          <CustomCheckbox
            name="clubhouse"
            title={"Площадка"}
            checked={checkboxState.area}
            onChange={() => onCheckboxChange("area")}
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
          onClick={cancel}
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
