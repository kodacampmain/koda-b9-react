import { Routes, Route } from "react-router";

import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import Parent from "./pages/Parent.jsx";
import DataFetch from "./pages/Fetch.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome start={5} />} />
      <Route path="/state" element={<Parent />} />
      <Route path="/rick" element={<DataFetch />} />
    </Routes>
  );
}

export default Router;
