import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMetricsReq } from "../api";

export const getMetrics = createAsyncThunk(
  "metric/getMetric",
  async (params, { rejectWithValue }) => {
    try {
      console.log("res");
      const res = await getMetricsReq(params);
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Ошибка сервера"
      );
    }
  }
);
