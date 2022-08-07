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
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity; //quantity of products being added, not cart quantity
    },
    removeFromCart: () => {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
