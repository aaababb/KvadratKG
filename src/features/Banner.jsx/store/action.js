import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHeadingsReq } from "./api";

export const getHeadings = createAsyncThunk("heading/getHeading", async (_, { rejectWithValue }) => {
  try {
    return (await getHeadingsReq()).data;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : "Ошибка сервера");
  }
});
