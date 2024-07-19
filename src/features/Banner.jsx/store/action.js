import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHeadingsReq } from "./api";

export const getHeadings = createAsyncThunk(
  'heading/getHeading',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getHeadingsReq();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : 'Ошибка сервера');
    }
  }
);
