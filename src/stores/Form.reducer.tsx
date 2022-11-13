import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  toggle: true
};

export const NameSlice = createSlice({
  name: "Name",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    toggleName(state) {
      state.toggle = !state.toggle;
    }
  }
});

export const NameActions = NameSlice.actions;
export const NameReducers = NameSlice.reducer;
