import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { getHeadings } from "./action";
import { HeadingSliceState } from "./types";

const initialState: HeadingSliceState = {
  items: [],
  isLoading: false,
  error: null,
};

const headingSlice = createSlice({
  name: "headings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHeadings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getHeadings.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.results;
      })
      .addCase(getHeadings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default headingSlice;
