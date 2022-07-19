// import { Box, Container, Pagination } from "@mui/material";
// import React, { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { productsContext } from "../../contexts/productsContext";
// import ProductsCard from "../ProductsCard/ProductsCard";

// const ProductsList = () => {
//   const { getProducts, products, pages } = useContext(productsContext);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [currentPage, setCurrentPage] = useState(1);
//   useEffect(() => {
//     getProducts();
//   }, []);
//   useEffect(() => {
//     getProducts();
//   }, [searchParams]);
//   useEffect(() => {
//     setSearchParams({
//       page: currentPage,
//     });
//   }, [currentPage]);
//   // console.log(products);
//   return (
//     <Container>
//       <Box
//         display={"flex"}
//         flexWrap={"wrap"}
//         justifyContent={"center"}
//         alignItems={"start"}>
//         {products.map(item => (
//           <ProductsCard key={item.id} item={item} />
//         ))}
//       </Box>
//       <Box display={"flex"} justifyContent={"center"}>
//         <Pagination
//           page={currentPage}
//           onChange={(e, page) => setCurrentPage(page)}
//           count={pages}
//           variant={"outlined"}
//           color="primary"
//         />
//       </Box>
//     </Container>
//   );
// };

// export default ProductsList;

import { Box, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import ProductsCard from "../ProductsCard/ProductsCard";

const ProductsList = () => {
  const { getProducts, products } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  // console.log(products);
  return (
    <div className="container">
      <div
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"start"}>
        {products.map(item => (
          <ProductsCard key={item.id} item={item} />
        ))}
      </div>
      <div display={"flex"} justifyContent={"center"}>
        {/* <Pagination
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={pages}
          variant={"outlined"}
          color="primary"
        /> */}
      </div>
    </div>
  );
};

export default ProductsList;
