import React from "react";
import { BrowserRouter } from "react-router-dom";

//! Components
import Header from "./components/Header/Header";
import CartContextProvider from "./context/cartContext";
import FavContextProvider from "./context/favContext";

//! Pages

import Routing from "./Routing";

function App() {
  return (
    <FavContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </CartContextProvider>
    </FavContextProvider>
  );
}

export default App;
