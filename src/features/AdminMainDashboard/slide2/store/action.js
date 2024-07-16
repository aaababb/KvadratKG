import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMetricsReq } from "../api";

export const getMetrics = createAsyncThunk(
  'metric/getMetric',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getMetricsReq();
      return res.data; // Возвращаем только данные
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : 'Ошибка сервера');
    }
  }
);
