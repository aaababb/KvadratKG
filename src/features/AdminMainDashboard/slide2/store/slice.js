import { createSlice } from "@reduxjs/toolkit";
import { getMetrics } from "./action";

const initialState = {
  analytics: {},
  statistics: [],
  isLoading: false,
  error: null,
};

const metricSlice = createSlice({
  name: "metrics",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMetrics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMetrics.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.analytics = payload.analytics;
        state.statistics = payload.statistics;
      })
      .addCase(getMetrics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const selectMetrics = (state) => state.metrics;
// export const selectLoading = (state) => state.metrics.loading;
// export const selectError = (state) => state.metrics.error;

export default metricSlice.reducer;
