import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";

import "./index.css";
import App from "./Router.jsx";

import ThemeProvider from "./contexts/theme/ThemeProvider.jsx";
import CartProvider from "./contexts/cart/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);
