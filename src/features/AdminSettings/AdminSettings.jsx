import { useState } from "react";
import profile from "../../shared/assets/svg/profilemen.svg";
import icon from "../../shared/assets/svg/profileicon.svg";

function AdminSettings() {
  const [file, setFile] = useState(null);

  function handleFileUpload(event) {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
    }
  }

  return (
    <div className="w-[90%] md:w-[40%] m-auto bg-[#131313] px-4 py-6 md:px-[56px] md:py-[50px] flex flex-col items-center gap-4 md:gap-9 border rounded-md">
      <div className="relative">
        <img
          className="w-[100px] h-[100px] md:w-[141px] md:h-[141px] box-border rounded-full object-cover" 
          src={file || profile}
          alt="uploaded"
        />
        <img
          className="absolute left-[60px] md:left-[90px] bottom-0 cursor-pointer"
          src={icon}
          alt="icon"
          onClick={() => document.getElementById("fileInput").click()}
        />
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
      </div>
      <input className={`${style}`} type="text" placeholder="Имя" />
      <input className={`${style}`} type="text" placeholder="Фамилия" />
      <button className="w-full text-center bg-red-600 hover:bg-red-700 rounded-full py-2 md:py-[10px] text-white">
        Сохранить
      </button>
    </div>
  );
}

export default AdminSettings;

const style = "py-2 md:py-[15px] pl-4 md:pl-[20px] w-full rounded-md bg-[#222224] text-white";
