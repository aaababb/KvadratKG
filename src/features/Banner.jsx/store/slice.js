import { createSlice } from "@reduxjs/toolkit";
import { getHeadings } from "./action";

const initialState = {
  headings: [],
  isLoading: false,
  error: null,
};

const headingSlice = createSlice({
  name: "headings",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getHeadings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getHeadings.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.headings = payload.results;
      })
      .addCase(getHeadings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default headingSlice.reducer;
