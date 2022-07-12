
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";
import React from "react";

//! Components
import Header from "./components/Header/Header";
import CartContextProvider from "./context/cartContext";

//! Pages

import Routing from "./Routing";

function App() {
  return (
  <ProductsContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </CartContextProvider>
    </ProductsContextProvider>

  );
}

export default App;
