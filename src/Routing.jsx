import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import AddProduct from "./components/AddProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import Catalog from "./components/Catalog/Catalog";
import Contacts from "./components/Contacts/Contacts";
import Delivery from "./components/Delivery/Delivery";
import Favorites from "./components/Favorites/Favorites";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Payment from "./components/Payment/Payment";
import ProductsCard from "./components/ProductsCard/ProductsCard";
import ProductsList from "./components/ProductsList/ProductsList";
import Register from "./components/Register/Register";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import Testimonials from "./components/Testimonials/Testimonials";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  // const { currentUser } = useContext(authContext);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/favourites" element={<Favorites />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/add" element={<AddProduct />} />
      
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/delivery" element={<Delivery />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/register-success" element={<RegissterSuccess />} /> */}
      {/* <Route
        path="/login"
        element={currentUser ? <Navigate to="/products" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={
          currentUser ? <Navigate to="/products" replace /> : <Register />
        }
      />
      <Route
        path="/register-success"
        element={
          currentUser ? (
            <Navigate to="/products" replace />
          ) : (
            <RegisterSuccess />
          )
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
      /> */}
    </Routes>
  );
};

export default Routing;
