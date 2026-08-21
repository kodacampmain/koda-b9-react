import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import fetchUrl from "../utils/fetchUrl.js";
// import cartContext from "../contexts/cart/cartContext.js";
import { addToCart } from "../redux/slices/cartSlices.js";
import { getProductThunk } from "../redux/slices/productSlices.js";

function ProductView() {
  // const [products, setProducts] = useState([]);
  // const { dispatch } = useContext(cartContext);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productState);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    dispatch(getProductThunk(url));
  }, [dispatch]);
  return (
    <main className="grid grid-cols-3 gap-2 p-2 overflow-scroll h-screen">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <article
              key={product.id}
              className="my-border p-2 grid grid-rows-[50%_1fr_1fr_auto] h-80 text-xs gap-2"
            >
              <div className="overflow-hidden flex justify-center">
                <img
                  className="object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <p className="overflow-hidden text-ellipsis">{product.title}</p>
              <p>{product.price}</p>
              <button
                className="my-border p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer"
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      qty: 1,
                    }),
                  );
                  // dispatch({
                  //   type: "ADD",
                  //   payload: {
                  //     id: product.id,
                  //     title: product.title,
                  //     price: product.price,
                  //     image: product.image,
                  //     qty: 1,
                  //   },
                  // });
                }}
              >
                Add to Cart
              </button>
            </article>
          );
        })}
    </main>
  );
}

export default ProductView;
