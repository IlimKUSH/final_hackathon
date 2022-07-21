import { Pagination, Slider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import HeaderDown from "../Header/HeaderDown";
import ProductsCard from "../ProductsCard/ProductsCard";
import Search from "../../images/search.svg";

const ProductsList = () => {
  const { getProducts, products, pages, price_from, price_to } =
    useContext(productsContext);
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

  // console.log(products);

  const [searchParam, setSearchParam] = useSearchParams();
  const [filterParam, setFilterParam] = useSearchParams();

  const [price, setPrice] = useState([price_to, price_from]);
  const [search, setSearch] = useState(
    searchParam.get("q") ? searchParam.get("q") : ""
  );
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setFilterParam({
      price_from: price[0],
      price_to: price[1],
    });
  }, [price]);
  useEffect(() => {
    getProducts();
  }, [filterParam]);
  useEffect(() => {
    setSearchParam({
      q: search,
    });
  }, [search]);

  return (
    <div className="container">
      <HeaderDown />

      <div style={{ display: "flex" }}>
        <Link to={"/"}>
          <p>главная</p>
        </Link>
        <p>/</p>
        <p>каталог</p>
      </div>

      <div className="search__parent">
        <div className="search">
          <img src={Search} alt="search" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Поиск"
            type="text"
          />
        </div>
      </div>
      <Slider
        className="slider"
        size="small"
        value={price}
        onChange={e => {
          setPrice(e.target.value);
        }}
        step={1000}
        min={0}
        max={100000}
        valueLabelDisplay="auto"
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(item => (
          <ProductsCard key={item.id} item={item} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}>
        <Pagination
          page={currentPage}
          count={pages}
          onChange={(e, page) => setCurrentPage(page)}
          variant={"outlined"}
          color="primary"
        />
      </div>
    </div>
  );
};

export default ProductsList;
