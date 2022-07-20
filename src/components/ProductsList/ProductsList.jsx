import { Box, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import HeaderDown from "../Header/HeaderDown";
import ProductsCard from "../ProductsCard/ProductsCard";

const ProductsList = () => {
  const { getProducts, products, pages } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);
  console.log(products);
  return (
    <div className="container">
      <HeaderDown />
      <div>
        {products.map(item => (
          <ProductsCard key={item.id} item={item} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          page={currentPage}
          count={5}
          onChange={(e, page) => setCurrentPage(page)}
          variant={"outlined"}
          color="primary"
        />
      </div>
    </div>
  );
};

export default ProductsList;
