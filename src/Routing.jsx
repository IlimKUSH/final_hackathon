import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
