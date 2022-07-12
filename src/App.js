import { BrowserRouter } from "react-router-dom";
import HeaderUp from "./components/Header/HeaderUp";
import Routing from "./Routing";
import "./index.css";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <HeaderUp />
          <Routing />
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
