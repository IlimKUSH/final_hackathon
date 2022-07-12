import React from "react";
import { BrowserRouter } from "react-router-dom";

//! Components
import Header from "./components/Header/Header";
import CartContextProvider from "./context/cartContext";

//! Pages

import Routing from "./Routing";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
