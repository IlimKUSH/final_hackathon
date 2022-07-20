import { IconButton, Rating } from "@mui/material";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard({ item }) {
  const { deleteProduct, getRating } = React.useContext(productsContext);
  const [value, setValue] = React.useState("");


  const { addToCart, checkProductInCart } = React.useContext(cartContext);
  const navigate = useNavigate();
  const [productState, setProductState] = React.useState(
    checkProductInCart(item.id)
  );
  // console.log(item);

  return (

    <div className="products">
      <div className="container">
        <div className="products__content">
          <img src={item.image} width={100} alt="qweqwe" />
          <h3>{item.name}</h3>
          <h3>{item.price} сом</h3>
          <button onClick={() => deleteProduct(item.id)}>delete</button>
          <button onClick={() => navigate(`/edit/${item.id}/`)}>edit</button>
          <button onClick={() => navigate(`/products/${item.id}`)}>
            details
          </button>
          <IconButton
            onClick={() => {
              addToCart(item);
              setProductState(checkProductInCart(item.id));
            }}>
            <AddShoppingCartIcon
              color={productState ? "secondary" : "primary"}
            />
          </IconButton>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

        </div>
      </div>
    </div>
  );
}
