import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHousesReq, postHouseReq } from "../api";

export const getHouses = createAsyncThunk(
  "get/getHouses",
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await getHousesReq();
      return data;
    } catch (err) {
      return rejectedWithValue("Error: ", err);
    }
  }
);

export const postHouse = createAsyncThunk(
  "post/postHouse",
  async (data, { rejectWithValue }) => {
    try {
      console.log("Data to be sent:", data);
      const res = await postHouseReq(data);
      console.log("Response:", res);
      return res.data;
    } catch (err) {
      console.error("Error occurred:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
