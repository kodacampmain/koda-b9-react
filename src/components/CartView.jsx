import { useContext } from "react";

import cartContext from "../contexts/cart/cartContext.js";

function CartView() {
  const { state, dispatch } = useContext(cartContext);
  return (
    <aside className="p-2 flex flex-col gap-2 overflow-scroll h-screen ">
      <section className="flex justify-end">
        <button
          className="my-border bg-amber-300 hover:bg-amber-400 rounded-md cursor-pointer px-2 text-sm"
          onClick={() => {
            dispatch({ type: "CLEAR" });
          }}
        >
          Clear All
        </button>
      </section>
      {state.cart.length === 0 ? (
        <div className="h-full flex justify-center items-center">
          <p>Keranjang Kosong</p>
        </div>
      ) : (
        state.cart.map((product) => {
          return (
            <article
              key={product.id}
              className="my-border p-2 grid grid-cols-4 grid-rows-2 text-xs gap-2 basis-30 shrink-0 grow-0"
            >
              <div className="overflow-hidden flex justify-center row-span-2">
                <img
                  className="object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <p className="col-span-2 overflow-hidden text-ellipsis">
                {product.title}
              </p>
              <p>{product.price}</p>
              <div className="col-span-2 grid grid-cols-2 grid-rows-2">
                <p className="col-span-2">Qty: {product.qty}</p>
                <button
                  className="my-border bg-gray-300 hover:bg-gray-400 rounded-md cursor-pointer"
                  onClick={() => {
                    if (product.qty === 1) {
                      dispatch({ type: "REMOVE", payload: product.id });
                      return;
                    }
                    dispatch({
                      type: "CHANGE",
                      payload: {
                        id: product.id,
                        qty: product.qty - 1,
                      },
                    });
                  }}
                >
                  -
                </button>
                <button
                  className="my-border bg-gray-300 hover:bg-gray-400 rounded-md cursor-pointer"
                  onClick={() => {
                    dispatch({
                      type: "CHANGE",
                      payload: {
                        id: product.id,
                        qty: product.qty + 1,
                      },
                    });
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="my-border bg-gray-300 hover:bg-gray-400 rounded-md cursor-pointer"
                onClick={() => {
                  dispatch({ type: "REMOVE", payload: product.id });
                }}
              >
                Remove
              </button>
            </article>
          );
        })
      )}
    </aside>
  );
}

export default CartView;
