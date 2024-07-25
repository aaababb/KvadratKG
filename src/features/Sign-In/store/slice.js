import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "./action";
import { deleteTokenLS, getTokenLS, setTokenLS } from "./utils";

const initialState = {
  token: getTokenLS(),
  status: "loading",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminLogout: (state) => {
      state.token = null;
      deleteTokenLS();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.token = payload;
        setTokenLS(payload);
        state.status = "success";
      })
      .addCase(adminLogin.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default adminSlice;
