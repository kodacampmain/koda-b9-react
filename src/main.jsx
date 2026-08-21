import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./Router.jsx";

import ThemeProvider from "./contexts/theme/ThemeProvider.jsx";
import CartProvider from "./contexts/cart/CartProvider.jsx";

import reduxStore, { persistor } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <CartProvider>
            <Router>
              <App />
            </Router>
          </CartProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
