import { BrowserRouter } from "react-router-dom";

import HeaderUp from "./components/Header/HeaderUp";
import Routing from "./Routing";
import "./index.css";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import AuthContextProvider from "./contexts/authContext";
import HeaderDown from "./components/Header/HeaderDown";
import FavContextProvider from "./contexts/favContext";
import Footer1 from "./components/Footer1/Footer1";
// import TestimonialsContextProvider from "./contexts/testimonialsContext";

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        {/* <FavContextProvider> */}
        {/* <CartContextProvider> */}
        <BrowserRouter>
          <HeaderUp />
          {/* <HeaderDown /> */}
          <Routing />
          <Footer1 />
        </BrowserRouter>
        {/* </CartContextProvider> */}
        {/* </FavContextProvider> */}
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
