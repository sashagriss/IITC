import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 2345,
        name: "coca cola",
        price: 8.9,
        quantity: 1,
        totalItemPrice: 8.9,
      },
      {
        id: 2346,
        name: "pepsi",
        price: 8,
        quantity: 3,
        totalItemPrice: 24,
      },
    ],
    totalQuantity: 6,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      // find item index
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      // filter index
      const item = state.items[itemIndex];
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price;
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
