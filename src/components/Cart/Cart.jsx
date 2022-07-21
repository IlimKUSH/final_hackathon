import * as React from "react";

import { IconButton } from "@mui/material";

import Loader from "../Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import "./cart.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

import HeaderDown from "../Header/HeaderDown";

export default function Cart({ item }) {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return cart ? (
    <div className="container">
      <HeaderDown />

      <div className="bread">
        <Link to={"/"}>
          <p>главная</p>
        </Link>
        <p>/</p>
        <Link to={"/cart"}>
          <p>корзина</p>
        </Link>
      </div>
      <div style={{ height: "vh" }}></div>
      <div>
        <div className="card-info">
          <img className="card-img" src="" alt="" />
        </div>
      </div>

      <div className="cart">
        <div className="product_in_cart">
          <div className="product_in_cart_1">
            {cart.products.map(item => (
              <div className="card_in_cart" key={item.item.id}>
                <div>
                  <img
                    className="cart_img"
                    src={item.item.image}
                    alt="product"
                  />
                </div>
                <div style={{ margin: "10px" }}>
                  <p
                    style={{ color: "#ea8305", fontSize: "18px" }}
                    onClick={() => navigate(`/products/${item.id}`)}>
                    {item.item.name}
                  </p>
                  <br />
                  <p style={{ color: "#ea8305", fontSize: "24px" }}>
                    {item.item.price}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    style={{ color: "wheat" }}
                    onClick={() => changeCount(item.count - 1, item.item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  <p style={{ color: "wheat" }}>{item.count}</p>
                  <IconButton
                    style={{ color: "wheat" }}
                    onClick={() => changeCount(item.count + 1, item.item.id)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: "wheat" }}
                    onClick={() => deleteFromCart(item.item.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: "wheat" }}
                    onClick={() => navigate(`/details/${item.item.id}`)}>
                    <InfoIcon />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="buy_in_cart">
          <div className="total_price">
            <p
              style={{
                color: "wheat",
                borderBottomStyle: "solid",
                borderColor: "#ea8305",
              }}>
              Итого:
            </p>
            <br />
            {cart.products.map(item => (
              <div key={item.item.id}>
                <p style={{ color: "wheat" }}>
                  {item.item.name}, общая сумма: {item.subPrice} сом.
                </p>
                <br />
              </div>
            ))}
          </div>
          <br />
          <Link to={"/Payment"}>
            <button className="cart_btn">перейти к оплате</button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
