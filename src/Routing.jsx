import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/Main";
import Payment from "./components/Payment/Payment";
import Testimonials from "./components/Testimonials/Testimonials";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default Routing;
