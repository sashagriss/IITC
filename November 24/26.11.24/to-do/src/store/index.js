import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice.js";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
