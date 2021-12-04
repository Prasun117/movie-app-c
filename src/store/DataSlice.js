import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [], isLoading: true, error: false };
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
});

export const dataAction = dataSlice.actions;
