import { Routes, Route } from "react-router";

import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import Parent from "./pages/Parent.jsx";
import DataFetch from "./pages/Fetch.jsx";
import Form from "./pages/Form.jsx";
import HookForm from "./pages/HookForm.jsx";
import DataDetail from "./pages/Detail.jsx";
import Theme from "./pages/Theme.jsx";
import Cart from "./pages/Cart.jsx";
import CartSlice from "./pages/CartSlice.jsx";

import MainLayout from "./layout/MainLayout.jsx";

// /app/v1
function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="welcome" element={<Welcome start={5} />} />
        <Route path="state" element={<Parent />} />
        <Route path="rick">
          <Route index element={<DataFetch />} />
          <Route path=":id/:slug" element={<DataDetail />} />
        </Route>
        <Route path="form" element={<Form />} />
        <Route path="hook-form" element={<HookForm />} />
        <Route path="theme" element={<Theme />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart-slice" element={<CartSlice />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <p>404</p>
        <p>Halaman tidak ditemukan</p>
      </div>
    </>
  );
}

export default Router;
