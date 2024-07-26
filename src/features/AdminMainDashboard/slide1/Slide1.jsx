import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import upload from "../../../shared/assets/svg/upload.svg";
import { postHeadings } from "./store/action";
import { selectIsLoading } from "./store/selectors";

const Slide1 = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const isLoading = useSelector(selectIsLoading);
  const { token } = useSelector((state) => state.admin);
  console.log(token);
  const inputFileRef = React.useRef(null);

  const handleSubmit = async () => {
    if (title.trim() === "") {
      alert("Title is required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    if (image) {
      formData.append("image", image);
    }

    const resultAction = await dispatch(postHeadings(formData));
    if (postHeadings.fulfilled.match(resultAction)) {
      console.log("POST request successful:", resultAction.payload);
      setTitle("");
      setImage(null);
    } else {
      console.log("POST request failed:", resultAction.payload);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const formats = ["IMG", "JPG","PNG"];

  return (
<div className='flex flex-col-reverse text-white h-auto w-[90%] lg:h-[520px] lg:flex-row justify-between p-9 bg-[#222224] gap-5'>
  <div className='flex flex-col lg:flex-row justify-between'>
    <div className="flex flex-col gap-[15px] w-full lg:w-auto">
      <div className="flex flex-col gap-[11px]">
        <h2 className="text-[28px] font-semibold">
          Добавить обзор активности
        </h2>
        <input
          className="w-full lg:w-[444px] h-[66px] bg-[#131313] text-[#B3B3B3] rounded-[5px] p-3"
          placeholder="Дабавить заголовок ... "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full lg:w-[444px] h-[176px] bg-[#131313] p-5 flex flex-col gap-[17px]">
        <div className="h-[46px] bg-[#C8180C] rounded-[28px] flex justify-center items-center">
          <button className="text-[18px] font-semibold w-full">
            <label htmlFor="image-upload" className="cursor-pointer">
              Загрузите изображение
            </label>
            <input
              id="image-upload"
              type="file"
              className="hidden"
              onChange={handleImageChange}
              ref={inputFileRef}
            />
          </button>
        </div>
        <p className="text-[15px] font-semibold">Допустимые форматы:</p>
        <div className="flex gap-3">
          {formats.map((obj, i) => (
            <span key={i} className="bg-slate-500 px-3 lg:px-5 lg:py-1 rounded-xl">
              {obj}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[444px] h-[56px] bg-[#C8180C] rounded-[47px] flex justify-center items-center p-30">
        <button
          className="text-[18px] font-semibold w-full"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Загрузка..." : "Сохранить и опубликовать"}
        </button>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-[680px] h-[200px] lg:h-[400px] bg-[#131313] flex justify-center items-center border border-indigo-800 mt-5 lg:mt-0">
    {image ? (
      <img
        src={URL.createObjectURL(image)}
        alt="Uploaded"
        className="object-contain h-full"
        onClick={() => inputFileRef.current.click()}
      />
    ) : (
      <img
        src={upload}
        alt="Upload"
        onClick={() => inputFileRef.current.click()}
      />
    )}
  </div>
</div>

  );
};

export default Slide1;
