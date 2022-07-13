import { BrowserRouter } from "react-router-dom";
import HeaderUp from "./components/Header/HeaderUp";
import Routing from "./Routing";
import "./index.css";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
// import AuthContextProvider from "./contexts/authContext";

function App() {
  return (
    // <AuthContextProvider>
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <HeaderUp />
          <Routing />
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
    // </AuthContextProvider>
  );
}

export default App;
