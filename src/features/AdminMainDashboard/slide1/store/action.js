import { createAsyncThunk } from "@reduxjs/toolkit";
import { headingPostReq } from "../api";

export const postHeadings = createAsyncThunk("user/postHeadings", async (formData, { rejectWithValue }) => {
  try {
    console.log(formData);
    const response = await headingPostReq(formData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response ? error.response.data : "Ошибка сервера");
  }
});

export const selectIsLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;
