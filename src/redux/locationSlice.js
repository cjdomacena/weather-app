/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    pending: false,
    error: false,
    data: [{ name: "New York" }],
  },
  reducers: {
    getLocationStart: (state) => {
      state.pending = true;
    },
    getLocationSucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    getLocationError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { getLocationStart, getLocationSucess, getLocationError } =
  locationSlice.actions;
export default locationSlice.reducer;
