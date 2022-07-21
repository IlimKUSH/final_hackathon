import React from "react";
import { productsContext } from "../../contexts/productsContext";

const FavoritesCard = ({ item }) => {
  const { getFavorite } = React.useContext(productsContext);
  console.log(item);
  return (
    <div className="container">
      <img src={item.image} alt={item.name} />
      <h3>{item.author}</h3>
      <h3>{item.product}</h3>
    </div>
  );
};

export default FavoritesCard;
