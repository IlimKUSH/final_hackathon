import { Box, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import FavoritesCard from "../FavoritesCard/FavoritesCard";
import HeaderDown from "../Header/HeaderDown";

const Favorites = () => {
  const { getFavorites, favoritesPages, favorites } =
    useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getFavorites();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getFavorites();
  }, []);
  // console.log(favorites, favoritesPages);
  return (
    <div className="container">
      <HeaderDown />
      <div
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"start"}>
        {favorites.map(item => (
          <FavoritesCard key={item.id} item={item} />
        ))}
      </div>
      <div display={"flex"} justifyContent={"center"}></div>
      <div display={"flex"} justifyContent={"center"}>
        <Pagination
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={favoritesPages}
          variant={"outlined"}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Favorites;
