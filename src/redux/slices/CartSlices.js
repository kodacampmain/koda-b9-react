import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (prevState, { payload }) => {
      let found = false;
      const newCart = [];
      for (let cart of prevState.cart) {
        if (cart.id === payload.id) {
          newCart.push({
            ...cart,
            qty: cart.qty + 1,
          });
          found = true;
          continue;
        }
        newCart.push(cart);
      }
      if (found)
        return {
          ...prevState,
          cart: newCart,
        };
      return {
        ...prevState,
        cart: [...newCart, payload],
      };
    },
    removeFromCart: (prevState, { payload }) => {
      return {
        ...prevState,
        cart: prevState.cart.filter((cart) => {
          return cart.id !== payload;
        }),
      };
    },
    changeCartItem: (prevState, { payload }) => {
      return {
        ...prevState,
        cart: prevState.cart.map((cart) => {
          if (cart.id === payload.id) {
            return {
              ...cart,
              qty: payload.qty,
            };
          }
          return cart;
        }),
      };
    },
    clearCart: (prevState) => {
      return {
        ...prevState,
        cart: initialState.cart,
      };
    },
  },
});

export const { addToCart, removeFromCart, changeCartItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
