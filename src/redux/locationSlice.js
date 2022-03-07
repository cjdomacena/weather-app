/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    pending: false,
    error: false,
    data: {},
    search: [],
  },
  reducers: {
    getLocationStart: (state) => {
      state.pending = true;
    },
    getLocationSucess: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    getSearchSuccess: (state, action) => {
      state.pending = false;
      state.search = action.payload;
    },
    getLocationError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {
  getLocationStart,
  getLocationSucess,
  getLocationError,
  getSearchSuccess,
} = locationSlice.actions;
export default locationSlice.reducer;
