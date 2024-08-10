import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHeadings = () => {
  const navigate = useNavigate();
  return (
    <div>
      AdminHeadings
      <button onClick={() => navigate("/admin/headings-add")} className="bg-red-700 text-white">
        Добавить Заголовок
      </button>
    </div>
  );
};

export default AdminHeadings;
