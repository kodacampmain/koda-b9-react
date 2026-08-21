import { useReducer, useEffect } from "react";

import CartContext from "./cartContext.js";

const initialState = {
  cart: [],
  hydrated: false,
};

// cartItem: id, name, price, qty

function CartProvider({ children }) {
  const [state, dispatch] = useReducer((prevState, action) => {
    // action
    // type => mendeskripsikan apa yg terjadi
    // payload => data yg dibawa
    // Menambah, Menghapus, Mengubah qty, Membersihkan

    switch (action.type) {
      case "PERSIST":
        return {
          ...prevState,
          cart: action.payload,
          hydrated: true,
        };
      // dispatch({type: "ADD, payload: cartItem})
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
      // dispatch({type: "CLEAR"})
      case "CLEAR":
        return {
          ...prevState,
          cart: initialState.cart,
        };

      default:
        return prevState;
    }
  }, initialState);

  // const [cart, setCart] = useState([]);

  // logika
  // kalau sudah ada item yg sama di keranjang maka tambahkan qty
  // kalau belum tambahkan list keranjang
  // const addToCart = (cartItem) => {
  //   setCart((prevCart) => {
  //     let found = false;
  //     const newCart = [];
  //     for (let cart of prevCart) {
  //       if (cartItem.id === cart.id) {
  //         newCart.push({
  //           ...cart,
  //           qty: cart.qty + 1,
  //         });
  //         found = true;
  //         continue;
  //       }
  //       newCart.push(cart);
  //     }
  //     if (found) return newCart;
  //     return [...prevCart, cartItem];
  //   });
  // };
  // useEffect(() => {
  //   console.log("effect 1");

  // }, []);

  useEffect(() => {
    // console.log("effect 2");
    (() => {
      if (!state.hydrated) {
        const data = localStorage.getItem("cart");
        if (data) {
          dispatch({ type: "PERSIST", payload: JSON.parse(data) });
        }
        return;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    })();
  }, [state.cart, state.hydrated]);
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
