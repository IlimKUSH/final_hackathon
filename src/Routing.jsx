import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Catalog from "./components/Catalog/Catalog";
import Favorites from "./components/Favorites/Favorites";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Payment from "./components/Payment/Payment";
import Register from "./components/Register/Register";
import RegissterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import Testimonials from "./components/Testimonials/Testimonials";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/favorite" element={<Favorites />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/favourites" element={<Favorites />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-success" element={<RegissterSuccess />} />
    </Routes>
  );
};

export default Routing;
