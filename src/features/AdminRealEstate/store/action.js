import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHousesReq,
  getHousesReqFilter,
  postHouseReq,
  getHouseByIdReq,
  patchHouseReq,
  deleteHouseReq,
} from "../api";

export const getHouses = createAsyncThunk(
  "get/getHouses",
  async (params, { rejectedWithValue }) => {
    try {
      if (params) {
        const { data } = await getHousesReqFilter(params);
        return data;
      } else {
        const { data } = await getHousesReq();
        return data;
      }
    } catch (err) {
      return rejectedWithValue("Error: ", err);
    }
  }
);

export const getHouseById = createAsyncThunk(
  "get/getHouseById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await getHouseByIdReq(id);
      return res.data;
    } catch (err) {
      return rejectWithValue("Error: ", err);
    }
  }
);

export const postHouse = createAsyncThunk(
  "post/postHouse",
  async ({ data, navigate }, { rejectWithValue }) => {
    try {
      const res = await postHouseReq(data);
      navigate("/admin");
      return res.data;
    } catch (err) {
      console.error("Error occurred:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const patchHouse = createAsyncThunk(
  "patch/patchHouse",
  async ({ data, id, navigate }, { rejectWithValue }) => {
    try {
      console.log(data, id);
      const res = await patchHouseReq(data, id);
      navigate("/admin");
      return res.data;
    } catch (err) {
      console.error("Error occurred:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteHouse = createAsyncThunk(
  "delete/deleteHouse",
  async (id, { rejectWithValue }) => {
    try {
      const res = await deleteHouseReq(id);
      return res.data;
    } catch (err) {
      console.error("Error occurred:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
