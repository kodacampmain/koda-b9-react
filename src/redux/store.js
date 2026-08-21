import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlices.js";
import productReducer from "./slices/productSlices.js";

const store = configureStore({
  reducer: {
    cartState: cartReducer,
    productState: productReducer,
  },
  devTools: import.meta.env.VITE_ENVIRONMENT === "development",
});

export default store;
