import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/AdminMainDashboard/slide1/store/slice";
import metricSlice from "../features/AdminMainDashboard/slide2/store/slice";
import headingSlice from "../features/Banner.jsx/store/slice";
import houseSlice from "../features/AdminRealEstate/store/slice";
import adminSlice from "../features/Sign-In/store/slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    metric: metricSlice,
    heading: headingSlice,
    [houseSlice.name]: houseSlice.reducer,
    [adminSlice.name]: adminSlice.reducer,
  },
});
