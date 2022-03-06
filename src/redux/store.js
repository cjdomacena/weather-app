import { configureStore } from "@reduxjs/toolkit";
import LocationSlice from "./locationSlice";
import weatherReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    forecast: weatherReducer,
    location: LocationSlice,
  },
});

export default store;
