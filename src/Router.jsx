import { Routes, Route } from "react-router";

import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import Parent from "./pages/Parent.jsx";
import DataFetch from "./pages/Fetch.jsx";
import Form from "./pages/Form.jsx";
import HookForm from "./pages/HookForm.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome start={5} />} />
      <Route path="/state" element={<Parent />} />
      <Route path="/rick" element={<DataFetch />} />
      <Route path="/form" element={<Form />} />
      <Route path="/hook-form" element={<HookForm />} />
    </Routes>
  );
}

export default Router;
