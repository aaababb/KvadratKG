import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import upload from "../../../shared/assets/svg/upload.svg";
import { postHeadings } from "./store/action";
import { selectIsLoading, selectError } from "./store/selectors";

const Slide1 = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const isLoading = useSelector(selectIsLoading);

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
  const formats = ["GIF", "WEBP", "MP3", "MP4", "PNG"];

  return (
    <div
      className={`border-gray-500 text-white  w-[90%] flex justify-between p-9 bg-[#222224] transition-all duration-300`}
    >
      <div className={`flex justify-between`}>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[11px]">
            <h2 className="text-[28px] font-semibold">
              Дабавить обзор активности
            </h2>
            <input
              className="w-[444px] h-[66px] bg-[#131313] text-[#B3B3B3] rounded-[5px] p-3"
              placeholder="Дабавить заголовок ... "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-[444px] h-[176px] bg-[#131313] p-5 flex flex-col gap-[17px]">
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
                />
              </button>
            </div>
            <p className="text-[15px] font-semibold">Допустимые форматы:</p>
            <div className="flex justify-between">
              {formats.map((obj, i) => (
                <span key={i} className="bg-slate-500 px-5 py-1 rounded-xl">
                  {obj}
                </span>
              ))}
            </div>
          </div>
          <div className="w-[444px] h-[56px] bg-[#C8180C] rounded-[47px] flex justify-center items-center p-30">
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
      <div className="w-[680px] h-[400px] bg-[#131313] flex justify-center items-center border border-indigo-800">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="object-contain h-full"
          />
        ) : (
          <img src={upload} alt="Upload" />
        )}
      </div>
    </div>
  );
};

export default Slide1;
