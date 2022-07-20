import { IconButton, Rating } from "@mui/material";
import "./ProductCard.css";

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
        <div className="products_content">
          <img
            className="products_img"
            src={item.image}
            width={100}
            alt="qweqwe"
          />
          <div style={{ paddingLeft: "4px" }}>
            <p style={{ fontSize: "14px", color: "white" }}>{item.name}</p>
            <p style={{ fontSize: "18px", color: "white" }}>{item.price} сом</p>
          </div>
          <br />
          <div style={{ paddingLeft: "4px" }}>
            <button
              className="products_btn"
              onClick={() => deleteProduct(item.id)}>
              delete
            </button>
            <button
              className="products_btn"
              onClick={() => navigate(`/edit/${item.id}/`)}>
              edit
            </button>
            <button
              className="products_btn"
              onClick={() => navigate(`/products/${item.id}`)}>
              details
            </button>
          </div>
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
