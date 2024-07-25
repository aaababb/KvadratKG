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
      navigate("/admin");
      return res.data;
    } catch (err) {
      return rejectedWithValue(err);
    }
  }
);
