import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from './cartSlice';

// here we create the store and set the reducer 
const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})

export default store;