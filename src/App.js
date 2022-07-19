import { BrowserRouter } from "react-router-dom";

import HeaderUp from "./components/Header/HeaderUp";
import Routing from "./Routing";
import "./index.css";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import AuthContextProvider from "./contexts/authContext";
import Footer from "./components/Footer/Footer";
import HeaderDown from "./components/Header/HeaderDown";
import FavContextProvider from "./contexts/favContext";
// import TestimonialsContextProvider from "./contexts/testimonialsContext";

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <HeaderUp />
            <HeaderDown />
            <Routing />
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
