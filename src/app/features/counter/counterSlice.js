import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  pizza: 0,
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    IncreasePizza: (state, action) => {
      state.pizza += 1;
    },
    DecreasePizza: (state, action) => {
      if (state.pizza <= 0) {
        const choice = window.confirm("Are you damn sure to decrease");
        if (choice) {
          state.pizza -= 1;
        }
      } else {
        state.pizza -= 1;
      }
    },
    AddNewCustomer: (state) => {
      state.count += 1;
    },
    RemoveCustomer: (state) => {
      const choice = window.confirm("Are you sure to decrease the count");
      if (choice) {
        state.count -= 1;
      }
    },
    AddNumberOfCustomer: (state, action) => {
      state.count += action.payload;
    },
    Reset: (state) => {
      state.count = 0;
    },
  },
});
export const {
  IncreasePizza,
  DecreasePizza,
  AddNewCustomer,
  RemoveCustomer,
  AddNumberOfCustomer,
  Reset,
} = counterSlice.actions;
export default counterSlice.reducer;
