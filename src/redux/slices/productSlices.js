import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import fetchUrl from "../../utils/fetchUrl.js";

const initialState = {
  products: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getProductThunk = createAsyncThunk(
  "get_product",
  async (url, { rejectWithValue }) => {
    try {
      const data = await fetchUrl(url);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getProductThunk, {
      pending: (state) => {
        // immerjs
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
        state.error = null;
        // no immerjs
        // return {
        //   ...state,
        //   error: null,
        //   isPending: true,
        //   isFulfilled: false,
        //   isRejected: false,
        // };
      },
      fulfilled: (state, { payload }) => {
        // immerjs
        state.products = payload;
        state.isPending = false;
        state.isFulfilled = true;
        // no immerjs
        // return {
        //   ...state,
        //   products: payload,
        //   isPending: true,
        //   isFulfilled: false,
        // };
      },
      rejected: (state, { payload }) => {
        // immerjs
        // console.log(payload);
        state.isPending = false;
        state.isRejected = true;
        state.error = payload;
        // no immerjs
        // return {
        //   ...state,
        //   error: payload,
        //   isPending: true,
        //   isFulfilled: false,
        //   isRejected: false,
        // };
      },
    });
  },
});

export default productSlice.reducer;
