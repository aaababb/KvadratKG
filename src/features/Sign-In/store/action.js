import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoot } from "../../../app/api";

const adminLoginReq = (data) => {
  return apiRoot.post("api/admin/login/", data);
};

export const adminLogin = createAsyncThunk(
  "post/adminLogin",
  async ({ data, navigate }, { rejectedWithValue }) => {
    try {
      const res = await adminLoginReq(data);
      if (res.status === 200) {
        navigate("/admin");
        alert("Вы успешно вошли в систему");
        return data;
      } else {
        return res.data;
      }
    } catch (err) {
      return rejectedWithValue(err);
    }
  }
);
