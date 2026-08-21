import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/CartSlices.js";

const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});

export default store;
