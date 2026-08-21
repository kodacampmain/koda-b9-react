import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";

import "./index.css";
import App from "./Router.jsx";

import ThemeProvider from "./contexts/theme/ThemeProvider.jsx";
import CartProvider from "./contexts/cart/CartProvider.jsx";

import reduxStore from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <ThemeProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
