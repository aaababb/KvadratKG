import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHousesReq } from "../api";

export const getHouses = createAsyncThunk(
  "get/getHouse",
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await getHousesReq();
      return data;
    } catch (err) {
      return rejectedWithValue("Error: ", err);
    }
  }
);
