import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/AdminMainDashboard/slide1/store/slice'
import metricSlice from '../features/AdminMainDashboard/slide2/store/slice'

export const store = configureStore({
    reducer:{
        user: userSlice,
        metric: metricSlice,
    }
})