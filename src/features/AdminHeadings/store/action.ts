import { apiRoot, axiosWithFile } from "../../../app/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostHeadingState } from "./types";
import { AxiosError } from "axios";

export const getHeadingsReq = () => {
  return apiRoot.get("/headings/");
};
const postHeadingReq = (data: PostHeadingState) => {
  return axiosWithFile.post("/headings/", data);
};

export const getHeadings = createAsyncThunk("heading/getHeading", async (_, { rejectWithValue }) => {
  try {
    return (await getHeadingsReq()).data;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : "Ошибка сервера");
  }
});

export const postHeading = createAsyncThunk<any, PostHeadingState, { rejectValue: any }>(
  "heading/postHeading",
  async (data, { rejectWithValue }) => {
    try {
      const res = await postHeadingReq(data);
      return res.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      console.error("Error occurred:", axiosError);
      return rejectWithValue(axiosError.response?.data || axiosError.message);
    }
  }
);
