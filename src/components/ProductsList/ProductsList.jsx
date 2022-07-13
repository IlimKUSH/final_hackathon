import { Box, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/productsContext";
import ProductsCard from "../ProductsCard/ProductsCard";

const ProductsList = () => {
  const { getProducts, products, pages } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products, pages);
  return (
    <Container>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
        {products.map(item => (
          <ProductsCard key={item.id} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default ProductsList;
