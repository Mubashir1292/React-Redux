import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/features/counter/counterSlice";
import pizzaReducer from "../app/features/pizza/PizzaSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pizza: pizzaReducer,
  },
});
