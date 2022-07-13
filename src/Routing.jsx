import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";
import Favorites from "./components/Favorites/Favorites";

const Routing = () => {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Routing;
