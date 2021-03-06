import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import AddProduct from "./components/AddProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Contacts/Contacts";
import Delivery from "./components/Delivery/Delivery";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Favorites from "./components/Favorites/Favorites";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Payment from "./components/Payment/Payment";
import PaymentSucces from "./components/PaymentSucces/PaymentSucces";

import Like from "./components/Like/Like";

import ProductsList from "./components/ProductsList/ProductsList";
import Register from "./components/Register/Register";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import Testimonials from "./components/Testimonials/Testimonials";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  const { currentUser, loading } = useContext(authContext);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/like" element={<Like />} />

      <Route path="/favorites" element={<Favorites />} />

      <Route path="/PaymentSucces" element={<PaymentSucces />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/products" element={<ProductsList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/delivery" element={<Delivery />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-success" element={<RegisterSuccess />} /> */}
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/products" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={currentUser ? <Navigate to="/" replace /> : <Register />}
      />
      <Route
        path="/register-success"
        element={
          currentUser ? <Navigate to="/" replace /> : <RegisterSuccess />
        }
      />
      <Route
        path="/products"
        element={
          currentUser ? <ProductsList /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/add"
        element={
          currentUser ? <AddProduct /> : <Navigate to="/login" replace />
        }
      />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/products/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Routing;
