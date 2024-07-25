import { createSlice } from "@reduxjs/toolkit";
import { getHouses } from "./action";

const Status = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const initialState = {
  items: [],
  status: Status.LOADING,
};

const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getHouses.fulfilled, (state, { payload }) => {
        state.items = payload.results;
        state.status = Status.SUCCESS;
      })
      .addCase(getHouses.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export default houseSlice;
