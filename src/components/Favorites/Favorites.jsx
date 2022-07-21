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
  }, []);
  useEffect(() => {
    getFavorites();
  }, []);
  console.log(favorites, favoritesPages);
  return (
    <div className="container">
      <HeaderDown />
      {favorites.map(item => (
        <FavoritesCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Favorites;
