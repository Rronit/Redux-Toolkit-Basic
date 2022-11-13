import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showVal: true
};
const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload; //internally use immer to update immutable way
    },
    decrement(state) {
      state.counter--;
    },

    toggle(state) {
      state.showVal = !state.showVal;
    }
  }
});

export const CounterReducers = CounterSlice.reducer;

export const CounterActions = CounterSlice.actions;
