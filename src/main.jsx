import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Welcome />
    <Home />
  </StrictMode>,
);
