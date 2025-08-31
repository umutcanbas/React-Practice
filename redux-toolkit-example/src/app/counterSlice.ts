import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },

    decrease: (state) => {
      state.value -= 1;
    },
  },
});

/* component */
export const { increase, decrease } = counterSlice.actions;
/* store */
export const counterReducer = counterSlice.reducer;
