import { useState } from "react";
// import { Link } from "react-router-dom";
import Rooms from "../../shared/assets/svg/Rooms.svg";
import baths from "../../shared/assets/svg/Baths.svg";
import fut from "../../shared/assets/svg/fut.svg";
import buildings from "../../shared/assets/svg/buildings.svg";
import bedroom from "../../shared/assets/svg/Bedroom.svg";
import kitchen from "../../shared/assets/svg/kitchen.svg";
import Typeimg from "../../shared/assets/svg/Typeimg.svg";
import Garage from "../../shared/assets/svg/Garage.svg";
import SelectAutoWidth from "./SelectAutoWidth";
import plus from "../../shared/assets/svg/upload.svg";
// import min from "../../shared/assets/svg/min.svg";
import Checkbox from "@mui/material/Checkbox";

const PenModal = ({ handleClosePen }) => {
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  

  const [checkedItems, setCheckedItems] = useState({
    lift: false,
    garden: false,
    fireplace: false,
    playground: false,
    laundry: false,
    clubhouse: false,
    garages: false,
    parking: false,
    gym: false,
    pool: false,
  });

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

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.id]: event.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      area,
      price,
      description,
      image: selectedImage,
      amenities: checkedItems,
    };

    console.log("Saving data:", formData);

    // Example of sending data to the server:
    // fetch('/api/save', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));

    // After saving, you can redirect the user
    // navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="text-white ml-4">
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
            className="w-[220px] h-[60px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 mb-4 placeholder-transparent"
            placeholder="Добавить заголовок..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {!title && (
            <span className="absolute top-2 left-2 text-[#B3B3B3] pointer-events-none transition-all duration-200 ease-in-out">
              Добавить заголовок...
            </span>
          )}
        </div>
<div className="flex flex-col gap-2">
          <input
            type="text"
            className="w-[280px] h-[30px] bg-[#131313] text-[#B3B3B3] rounded-md p-2"
            placeholder="Площадь/Планировка"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <div className="relative">
            <input
              type="text"
              className="w-[280px] h-[30px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 pl-8"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
      </div>

      <h4>Информация для детальной страницы</h4>
      <div className="flex  mt-4">
        <div className="min-w-[20%] max-w-[45%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Комнаты</p>
            <img className="ml-2" width={16} src={Rooms} alt="Rooms" />
          </div>
          <SelectAutoWidth />
        </div>
        <div className="min-w-[20%] max-w-[45%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Ванна</p>
            <img className="ml-2" width={16} src={baths} alt="Baths" />
          </div>
          <SelectAutoWidth />
        </div>
        <div className="min-w-[20%] max-w-[45%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">кв.фут</p>
            <img className="ml-2" width={16} src={fut} alt="Square Footage" />
          </div>
          <SelectAutoWidth />
        </div>
        <div className="min-w-[20%] max-w-[45%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Год постройки</p>
            <img className="ml-2" width={16} src={buildings} alt="Year Built" />
          </div>
          <SelectAutoWidth />
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-[24%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Спальня</p>
            <img className="ml-2" width={16} src={bedroom} alt="Bedroom" />
          </div>
          <SelectAutoWidth />
        </div>
        <div className="w-[23%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Кухня</p>
            <img className="ml-2" width={16} src={kitchen} alt="Kitchen" />
          </div>
          <SelectAutoWidth />
        </div>
        <div className="w-[23%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Тип</p>
            <img className="ml-2" width={16} src={Typeimg} alt="Type" />
          </div>
          <SelectAutoWidth />
        </div>
        <div className="w-[23%]">
          <div className="flex bg-[#C8180C] p-1 items-center justify-center">
            <p className="pt-1 text-xs">Гараж</p>
            <img className="ml-2" width={16} src={Garage} alt="Garage" />
          </div>
          <SelectAutoWidth />
        </div>
      </div>

      <div className="mt-4">
        <input
          type="text"
          className="w-[500px] h-[30px] bg-[#131313] text-[#B3B3B3] rounded-md p-2 mb-4"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
<div className="pt-4">
        <h2>Удобства</h2>
        <div className="flex gap-2 w-[600px]">
          <div className=" flex flex-col gap-2  ">
            <div className="flex items-center text-sm">
               <Checkbox
                 id="lift"
                checked={checkedItems.lift}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }} 
              />
              <label htmlFor="lift" className="leading-none">
                Лифт
              </label>
            </div> 
            <div className="flex items-center text-sm">
            <Checkbox
                 id="parking"
                checked={checkedItems.parking}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label htmlFor="parking" className="leading-none">
              Стоянка
              </label>
            </div>
          </div> 
           <div className=" flex flex-col gap-2">
            <div className="flex items-center text-sm">
            <Checkbox
                 id="garden"
                checked={checkedItems.garden}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label htmlFor="garden" className="leading-none">
                 Сад
              </label>
            </div> 
             <div className="flex items-center text-sm  ">
            <Checkbox
                 id="gym"
                checked={checkedItems.gym}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label htmlFor="gym" className="leading-none">
                Спортзал
              </label>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex items-center text-sm "> 
             <Checkbox
                 id="fireplace"
                checked={checkedItems.fireplace}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label htmlFor="fireplace" className="leading-none">
                Камин
              </label>
            </div>
            <div className="flex items-center text-sm"> 
            <Checkbox
                 id="pool"
                checked={checkedItems.pool}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label htmlFor="pool" className="leading-none">
                Бассейн
              </label>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex items-center text-sm">
             <Checkbox
                 id="layground"
                checked={checkedItems.layground}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label htmlFor="layground" className="leading-none">
              Детская площадка
              </label>
            </div>
            <div className="flex items-center text-sm "> 
            <Checkbox
                 id="clubhouse"
                checked={checkedItems.clubhouse}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label htmlFor=" clubhouse" className="leading-none">
              Клубный дом
              </label>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex items-center text-sm"> 
             <Checkbox
                 id="laundry"
                checked={checkedItems.laundry}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label htmlFor="laundry" className="leading-none">
              Прачечная
              </label>
</div>
            <div className="flex items-center text-sm "> 
             <Checkbox
                 id="garages"
                checked={checkedItems.garages}
                onChange={handleCheckboxChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <label htmlFor="garages" className="leading-none">
              Гаражи
              </label>
            </div> 
          </div>
        </div>
      </div>

      <div className="flex mt-3 gap-2">
        <button
          type="submit"
          className="bg-[#C8180C] text-white w-[110px] h-[40px] rounded-full"
        >
          Сохранить
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