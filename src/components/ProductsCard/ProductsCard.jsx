import { IconButton, Rating } from "@mui/material";
import "./ProductCard.css";

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { authContext } from "../../contexts/authContext";

export default function ProductCard({ item }) {
  const { deleteProduct, getLike, getFavorite } =
    React.useContext(productsContext);
  const [value, setValue] = React.useState("");

  const { addToCart, checkProductInCart } = React.useContext(cartContext);
  const navigate = useNavigate();
  const [productState, setProductState] = React.useState(
    checkProductInCart(item.id)
  );

  const [searchParam, setSearchParam] = useSearchParams();
  const [search, setSearch] = useState(
    searchParam.get("q") ? searchParam.get("q") : ""
  );
  useEffect(() => {
    setSearchParam({
      q: search,
    });
  }, [search]);
  const { currentUser, checkAuth } = useContext(authContext);
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  // console.log(item);

  return (
    <div className="products">
      <div className="container">
        <div className="header__search"></div>
        <div className="products_content">
          <img className="products_img" src={item.image} alt="qweqwe" />
          <div style={{ paddingLeft: "4px" }}>
            <p style={{ fontSize: "14px", color: "white" }}>{item.name}</p>
            <p style={{ fontSize: "18px", color: "white" }}>{item.price} сом</p>
            <p>Comments: {item.comments.length}</p>
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
            <button className="products_btn" onClick={() => getLike(item.id)}>
              {item.like}
              like
            </button>
            <button
              className="products_btn"
              onClick={() => getFavorite(item.id)}>
              {item.favorites}
              favorite
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
