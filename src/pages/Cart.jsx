import CartView from "../components/CartView.jsx";
import ProductView from "../components/ProductView.jsx";

function Cart() {
  return (
    <main className="min-h-screen grid grid-cols-[2fr_1fr]">
      <ProductView />
      <CartView />
    </main>
  );
}

export default Cart;
