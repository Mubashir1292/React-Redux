import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  pizzasAvailable: 5,
};
const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    PizzaOrdered: (state) => {
      state.pizzasAvailable -= 1;
    },
    PizzaAdded: (state) => {
      state.pizzasAvailable += 1;
    },
  },
});
export const { PizzaOrdered, PizzaAdded } = pizzaSlice.actions;
export default pizzaSlice.reducer;
