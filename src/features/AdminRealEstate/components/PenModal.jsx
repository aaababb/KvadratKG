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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xs:ml-0 sm:ml-[20px] md:ml[100px] lg:ml-[0] text-white relative rounded-lg border border-black w-[370px] md:w-[600px] h-[220px] md:h-[630px] max-h-full overflow-y-auto"
    >
      <div className="md:w-[680px] h-[20px] md:h-[50px] rounded-t-lg bg-[#C8180C] max-w-full flex items-center px-5 absolute left-1/2 transform -translate-x-1/2 w-full">
        <p className="text-center text-[10px] md:text-[15px] ">Создать новую карточку для недвижимости</p>
      </div>
  
      <div className="bg-[#131313] text-[#B3B3B3] rounded-md p-1 md:py-4 mt-5 md:mt-16 flex items-center gap-5">
        <label className="ml-2 cursor-pointer w-full flex items-center">
          <img src={selectedImage || house.image || upload} alt="img" className="w-[20px] h-[20px] mr-2" />
          <p className="text-xs">Добавить фото</p>
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
      </div>
  
      <div className="flex justify-between mt-2 md:mt-4">
        <div className="relative">
          <textarea
            type="text"
            className="w-[170px] md:w-[290px] h-[50px] md:h-[80px] resize-none bg-[#131313] text-[10px] md:text-[20px] text-[#B3B3B3] rounded-md pl-5 placeholder-[#B3B3B3] border border-gray-600 md:border-2 md:border-gray-600"
            placeholder="Добавить заголовок..."
            {...register("title")}
          />
        </div>
        <div className="flex flex-col md:gap-1 mt-0 w-[190px] md:w-[300px]">
          <input
            // type="number"
            className="w-full h-[20px] md:h-[35px] bg-[#131313] text-[#B3B3B3] text-[10px] md:text-[15px] rounded-md p-2 pl-5 border border-gray-600 md:border-2 md:border-gray-600"
            placeholder="Площадь (м2)"
            {...register("square_footage")}
          />
          <div className="relative mt-1 md:mt-2">
            <input
              // type="number"
              className="w-full h-[20px] md:h-[35px] bg-[#131313] text-[#B3B3B3] text-[10px] md:text-[15px] rounded-md p-2 pl-5 border border-gray-600 md:border-2 md:border-gray-600"
              placeholder="Цена"
              {...register("price")}
            />
          </div>
        </div>
      </div>
  
      <h4 className="text-[10px] md:text-sm my-2 md:mt-4">Информация для детальной страницы</h4>
      <div className="flex md:mt-4 flex-wrap gap-1">
        {[
          { label: "Комнаты", icon: Rooms, name: "rooms", value: house.rooms },
          { label: "Ванна", icon: baths, name: "bathroom", value: house.bathroom },
          { label: "Спальня", icon: bedroom, name: "bedrooms", value: house.bedrooms },
          { label: "Кухня", icon: kitchen, name: "kitchen", value: house.kitchen },
          { label: "Гараж", icon: Garage, name: "garage_how_many", value: house.garage_how_many },
        ].map(({ label, icon, name, value }) => (
          <div className="w-[19%] md:w-[19.4%]" key={name}>
            <div className="flex bg-[#C8180C] md:p-1 items-center justify-center">
              <p className="text-[8px] md:text-xs">{label}</p>
              <img className="ml-2 w-[12px] md:w-[16px]" src={icon} alt={label} />
            </div>
            {/* <div className=" flex justify-center items-center bg-[#262626] md:w-[100px]"> */}
              <SelectAutoWidth
                count={7}
                register={register}
                name={name}
                defaultValue={value}
              />
              {/* </div> */}
          </div>
        ))}
      </div>
  
      <div className="mt-2 md:mt-4">
        <textarea
          type="text"
          className="w-full resize-none bg-[#131313] text-[#B3B3B3] rounded-md p-2 mb-2 border-2 border-gray-600"
          placeholder="Описание"
          {...register("description")}
        />
      </div>
  
      <div className="pt-1">
        <h2 className="text-[10px] md:text-sm">Удобства</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[6px] my-2">
          {[
            { name: "pool", title: "Бассейн" },
            { name: "gym", title: "Тренажерный зал" },
            { name: "garage", title: "Гараж" },
            { name: "parking", title: "Парковка" },
            { name: "garden", title: "Сад" },
            { name: "fireplace", title: "Камин" },
            { name: "elevator", title: "Лифт" },
            { name: "clubhouse", title: "Клубный зал" },
            { name: "laundry", title: "Прачечная" },
            { name: "area", title: "Площадка" },
          ].map(({ name, title }) => (
            <CustomCheckbox
              key={name}
              name={name}
              title={title}
              checked={checkboxState[name]}
              onChange={() => onCheckboxChange(name)}
            />
          ))}
        </div>
      </div>
  
      <div className="flex m-3 gap-2">
        <button
          type="submit"
          className="bg-[#C8180C] text-white w-[120px] h-[35px] rounded-full flex items-center justify-center"
        >
          <AddIcon />
          <span className="ml-2 text-sm">Добавить</span>
        </button>
  
        <button
          onClick={cancel}
          type="button"
          className="bg-[#262626] text-white w-[120px] h-[35px] text-sm rounded-full"
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default PenModal;
