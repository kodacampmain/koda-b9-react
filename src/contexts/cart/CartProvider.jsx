import { useReducer } from "react";

import CartContext from "./cartContext.js";

const initialState = {
  cart: [],
};

// cartItem: id, name, price, qty

function CartProvider({ children }) {
  const [state, dispatch] = useReducer((prevState, action) => {
    // action
    // type => mendeskripsikan apa yg terjadi
    // payload => data yg dibawa
    // Menambah, Menghapus, Mengubah qty, Membersihkan

    // dispatch({type: "ADD, payload: cartItem})
    switch (action.type) {
      case "ADD":
        return (() => {
          let found = false;
          const newCart = [];
          for (let cart of prevState.cart) {
            if (cart.id === action.payload.id) {
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
            cart: [...newCart, action.payload],
          };
        })();
      // dispatch({type: "REMOVE", payload: id})
      case "REMOVE":
        return {
          ...prevState,
          cart: prevState.cart.filter((cart) => {
            return cart.id !== action.payload;
          }),
        };
      // dispatch({type: "CHANGE", payload: {id, qty}})
      case "CHANGE":
        return {
          ...prevState,
          cart: prevState.cart.map((cart) => {
            if (cart.id === action.payload.id) {
              return {
                ...cart,
                qty: action.payload.qty,
              };
            }
            return cart;
          }),
        };
      case "CLEAR":
        return {
          ...prevState,
          cart: initialState.cart,
        };

      default:
        return prevState;
    }
  }, initialState);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
