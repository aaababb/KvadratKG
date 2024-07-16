import { createSlice } from "@reduxjs/toolkit";
import { getMetrics } from "./action";

const initialState = {
  metrics: {},
  isLoading: false,
  error: null,
};

const metricSlice = createSlice({
  name: 'metrics',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMetrics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMetrics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.metrics = action.payload; // Сохраняем только данные
      })
      .addCase(getMetrics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Используем payload, а не message
      });
  },
});

export default metricSlice.reducer;
