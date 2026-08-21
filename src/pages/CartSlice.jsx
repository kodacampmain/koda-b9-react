import CartView from "../components/CartViewSlice.jsx";
import ProductView from "../components/ProductViewSlice.jsx";

function Cart() {
  return (
    <main className="min-h-screen grid grid-cols-[2fr_1fr]">
      <ProductView />
      <CartView />
    </main>
  );
}

export default Cart;
