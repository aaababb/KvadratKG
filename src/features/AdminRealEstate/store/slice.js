import { createSlice } from "@reduxjs/toolkit";
import { getHouses, getHouseById } from "./action";

export const Status = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const initialState = {
  items: [],
  item: {},
  count: 0,
  status: Status.LOADING,
};

const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    itemClear: (state) => {
      state.item = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getHouses.fulfilled, (state, { payload }) => {
        state.items = payload.results;
        state.status = Status.SUCCESS;
        state.count = payload.count;
      })
      .addCase(getHouses.rejected, (state) => {
        state.status = Status.ERROR;
      });

    builder
      .addCase(getHouseById.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getHouseById.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.status = Status.SUCCESS;
      })
      .addCase(getHouseById.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const { itemClear } = houseSlice.actions;
export default houseSlice;
