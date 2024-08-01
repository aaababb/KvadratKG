import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setPrice } = filterSlice.actions;
export default filterSlice;
