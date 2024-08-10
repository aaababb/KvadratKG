import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/store";

import SelectAutoWidth from "./SelectAutoWidth";
import AddIcon from "@mui/icons-material/Add";
import ModalUI from "../../../shared/helpers/ModalUI";

import { getHouseById, postHouse, patchHouse } from "../store/action";
import { itemClear, selectHouses } from "../store/slice";

import CustomCheckbox from "./CheckboxUI";
import { PostHouseState } from "../store/types";

const PenModal = () => {
  const dispatch = useAppDispatch();
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
      dispatch(getHouseById(Number(houseId)));
    }
  }, [houseId, dispatch]);

  const { item } = useSelector(selectHouses);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditing ? item : {},
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
    pool: item?.pool || false,
    gym: item?.gym || false,
    garage: item?.garage || false,
    parking: item?.parking || false,
    garden: item?.garden || false,
    fireplace: item?.fireplace || false,
    elevator: item?.elevator || false,
    clubhouse: item?.clubhouse || false,
    laundry: item?.laundry || false,
    area: item?.area || false,
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
          id: Number(houseId),
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
    if (item) {
      reset(item);
    }
  }, [item, reset]);

  return (
    <ModalUI>
      <form onSubmit={handleSubmit(onSubmit)} className="text-white relative pt-1">
        <div className="w-[750px] h-[50px] rounded-lg bg-[#C8180C] max-500:w-full flex items-center px-5 absolute left-1/2 transform -translate-x-1/2">
          <p>Создать новую карточку для недвижимости</p>
        </div>

        <div className="bg-[#131313] text-[#B3B3B3] rounded-md p-1 md:py-4 mt-5 md:mt-16 flex items-center gap-5">
          <label className="ml-2 cursor-pointer w-full flex items-center">
            <img src={selectedImage || "./svg/upload.svg"} alt="img" className="w-[20px] h-[20px] mr-2" />
            <p className="text-xs">Добавить фото</p>
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        <div className="flex justify-between mt-2 md:mt-4">
          <div className="relative">
            <textarea
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

        <h4>Информация для детальной страницы</h4>
        <div className="flex mt-4">
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Комнаты</p>
              <img className="ml-2" width={16} src="./svg/Rooms.svg" alt="Rooms" />
            </div>
            <SelectAutoWidth count={5} register={register} name="rooms" defaultValue={item?.rooms} />
          </div>
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Ванна</p>
              <img className="ml-2" width={16} src="./svg/Baths.svg" alt="bathroom" />
            </div>
            <SelectAutoWidth count={5} register={register} name="bathroom" defaultValue={item?.bathroom} />
          </div>
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Спальня</p>
              <img className="ml-2" width={16} src="./svg/Bedroom.svg" alt="Bedroom" />
            </div>
            <SelectAutoWidth count={5} register={register} name="bedrooms" defaultValue={item?.bedrooms} />
          </div>
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Кухня</p>
              <img className="ml-2" width={16} src="./svg/kitchen.svg" alt="kitchen" />
            </div>
            <SelectAutoWidth count={5} register={register} name="kitchen" defaultValue={item?.kitchen} />
          </div>
          <div className="w-[20%]">
            <div className="flex bg-[#C8180C] p-1 items-center justify-center">
              <p className="pt-1 text-xs">Гараж</p>
              <img className="ml-2" width={16} src="./svg/Garage.svg" alt="garage_how_many" />
            </div>
            <SelectAutoWidth count={5} register={register} name="garage_how_many" defaultValue={item?.garage_how_many} />
          </div>
        </div>

        <div className="mt-2 md:mt-4">
          <textarea
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
          <button type="submit" className="bg-[#C8180C] text-white w-[110px] h-[40px] rounded-full">
            <AddIcon />
            <span className="ml-2 text-sm">Добавить</span>
          </button>

          <button onClick={cancel} type="button" className="bg-[#262626] text-white w-[120px] h-[35px] text-sm rounded-full">
            Отмена
          </button>
        </div>
      </form>
    </ModalUI>
  );
};

export default PenModal;
