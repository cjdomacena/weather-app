/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "forecast",
  initialState: {
    pending: false,
    error: false,
    data: {},
  },
  reducers: {
    getForecastStart: (state) => {
      state.pending = true;
    },
    getForecastSuccess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    getForecastError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { getForecastStart, getForecastSuccess, getForecastError } =
  weatherSlice.actions;
export default weatherSlice.reducer;
