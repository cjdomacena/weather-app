import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    forecast: weatherReducer,
  },
});

export default store;
