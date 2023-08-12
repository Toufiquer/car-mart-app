/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});
export const {} = carsSlice.actions;
export default carsSlice.reducer;
