import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderUp from "./components/Header/HeaderUp";
import Main from "./components/Main/Main";
import Routing from "./Routing";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderUp />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
