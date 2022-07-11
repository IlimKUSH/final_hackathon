import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
