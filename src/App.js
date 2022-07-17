import { BrowserRouter } from "react-router-dom";

import HeaderUp from "./components/Header/HeaderUp";
import Routing from "./Routing";
import "./index.css";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import AuthContextProvider from "./contexts/authContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AuthContextProvider>
      {/* <ProductsContextProvider> */}
      {/* <CartContextProvider> */}
      <BrowserRouter>
        <HeaderUp />
        <Routing />
        <Footer />
      </BrowserRouter>
      {/* </CartContextProvider> */}
      {/* </ProductsContextProvider> */}
    </AuthContextProvider>
  );
}

export default App;
