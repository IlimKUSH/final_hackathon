
import { BrowserRouter } from "react-router-dom";
import HeaderUp from "./components/Header/HeaderUp";
import Main from "./components/Main/Main";
import Routing from "./Routing";
import "./App.css";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./context/cartContext";




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
