import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "./action";
import { deleteUserLS, getUserLS, setUserLS } from "./utils";

const initialState = {
  user: getUserLS(),
  status: "loading",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminLogout: (state) => {
      state.user = null;
      deleteUserLS();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.user = payload;
        setUserLS(payload);
        state.status = "success";
      })
      .addCase(adminLogin.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default adminSlice;
