import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/user.slice";
import { cartReducer } from "../slices/cart.slice";
import { wishlistReducer } from "../slices/wishlist.slice";
import { ordersReducer } from "../slices/orders.slice";

export const store = configureStore({
  reducer: {
    userReducer,
    cartReducer,
    wishlistReducer,
    ordersReducer,
   },
});
