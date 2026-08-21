import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  persistReducer,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

import cartReducer from "./slices/cartSlices.js";
import productReducer from "./slices/productSlices.js";

const storage = {
  getItem: (key) => {
    return Promise.resolve(window.localStorage.getItem(key));
  },
  setItem: (key, value) => {
    return Promise.resolve(window.localStorage.setItem(key, value));
  },
  removeItem: (key) => {
    return Promise.resolve(window.localStorage.removeItem(key));
  },
};

const persistCartConfig = {
  key: "cart_product",
  storage,
  whitelist: ["cartState"],
};
const persistProductConfig = {
  key: "product",
  storage,
  whitelist: ["products"],
};

const store = configureStore({
  reducer: persistCombineReducers(persistCartConfig, {
    cartState: cartReducer,
    productState: persistReducer(persistProductConfig, productReducer),
  }),
  devTools: import.meta.env.VITE_ENVIRONMENT === "development",
});

export const persistor = persistStore(store);

export default store;
