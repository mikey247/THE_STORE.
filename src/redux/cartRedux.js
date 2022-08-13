//
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.products.find(
        (item) => item._id === newItem._id
      );
      if (!existingItem) {
        state.products.push(action.payload);
        state.quantity++;
      } else {
        existingItem.quantity = existingItem.quantity + action.payload.quantity;
      }
      state.total += action.payload.price * action.payload.quantity; //quantity of products being added, not cart quantity
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.products.find((item) => item._id === id);
      state.total -= existingItem.price;
      // existingItem.quantity--
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((item) => item._id !== id);
        state.quantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    //
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
