import React,{useState} from "react";
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
    <div className="w-[40%] m-auto bg-[#131313] px-[56px] py-[50px] flex flex-col items-center gap-9 border rounded-md">
      <div>
        <img
          className="w-[141px] h-[141px] box-border rounded-full"
          src={file || profile}
          alt="uploaded"
        />
        <img
          className="absolute ml-[90px] mt-[-30px] cursor-pointer"
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
      <input className={`${style}`} type="name" placeholder="Имя" />

      <input className={`${style}`} type="firstname" placeholder="Фамилия" />
      <button className="w-full text-center bg-red-600 hover:bg-red-700 rounded-full py-[10px] text-white">
        Сохранить
      </button>
    </div>
  );
}

export default AdminSettings;
const style = "py-[15px] pl-[20px]  w-full rounded-md  bg-[#222224] text-white";
