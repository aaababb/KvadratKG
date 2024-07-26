import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMetricsReq } from "../api";

export const getMetrics = createAsyncThunk(
  "metric/getMetric",
  async (params, { rejectWithValue }) => {
    try {
      const res = await getMetricsReq(params);
      return res;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Ошибка сервера"
      );
    }
  }
);
