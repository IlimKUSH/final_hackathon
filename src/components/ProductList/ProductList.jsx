import { Container } from "@mui/material";
import React, { useContext } from "react";
import { productsContext } from "../../context/porductsContext";

const ProductList = () => {
  const [products, getProducts, pages] = useContext(productsContext);

  return <Container></Container>;
};

export default ProductList;
