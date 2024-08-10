import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/store";
import { postHeading } from "../store/action";
import { selectIsLoading } from "../store/selectors";
import ModalUI from "../../../shared/helpers/ModalUI";

const AddHeading: React.FC = () => {
  const dispatch = useAppDispatch();
  const [image, setImage] = React.useState<File | null>(null);
  const [title, setTitle] = React.useState<string>("");
  const isLoading = useSelector(selectIsLoading);

  const inputFileRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = async () => {
    if (!image) return;
    dispatch(postHeading({ title, image }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const formats = ["IMG", "JPG", "PNG"];

  return (
    <ModalUI>
      <div className="flex flex-col-reverse text-white h-auto w-[100%] lg:h-[520px] lg:flex-row justify-between p-9 bg-[#222224] gap-5">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-[15px] w-full lg:w-auto">
            <div className="flex flex-col gap-[11px]">
              <h2 className="text-[18px] md:text-[28px] font-semibold">Дабавить обзор активности</h2>
              <input
                className="w-full lg:w-[444px] h-[66px] bg-[#131313] text-[#B3B3B3] rounded-[5px] p-3"
                placeholder="Дабавить заголовок ... "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-full lg:w-[444px] h-[176px] bg-[#131313] p-5 flex flex-col gap-[17px]">
              <div className="h-[46px] bg-[#C8180C] rounded-[28px] flex justify-center items-center">
                <button className="text-[15px] md:text-[18px] font-semibold w-full">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    Загрузите изображение
                  </label>
                  <input id="image-upload" type="file" className="hidden" onChange={handleImageChange} ref={inputFileRef} />
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
              <button className="text-[15px] md:text-[18px] font-semibold w-full" onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? "Загрузка..." : "Сохранить и опубликовать"}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[680px] h-[200px] lg:h-[400px] bg-[#131313] flex justify-center items-center border border-indigo-800 mt-0 lg:mt-1">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="object-contain h-full"
              onClick={() => inputFileRef.current?.click()}
            />
          ) : (
            <img src="./svg/upload.svg" alt="Upload" onClick={() => inputFileRef.current?.click()} />
          )}
        </div>
      </div>
    </ModalUI>
  );
};

export default AddHeading;
