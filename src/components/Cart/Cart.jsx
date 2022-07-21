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
          <div>
            {cart.products.map(item => (
              <div className="card_in_cart" key={item.item.id}>
                <div>
                  <img
                    className="cart_img"
                    src={item.item.image}
                    alt="product"
                  />
                </div>
                <div style={{ margin: "5px" }}>
                  <p
                    style={{ color: "white", fontSize: "18px" }}
                    onClick={() => navigate(`/products/${item.id}`)}>
                    {item.item.name}
                  </p>
                  <br />
                  <p style={{ color: "white", fontSize: "24px" }}>
                    {item.item.price}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => changeCount(item.count - 1, item.item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  <p style={{ color: "white" }}>{item.count}</p>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => changeCount(item.count + 1, item.item.id)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => deleteFromCart(item.item.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => navigate(`/details/${item.item.id}`)}>
                    <InfoIcon />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </div>
        {cart.products.map(item => (
          <div className="buy_in_cart" key={item.item.id}>
            <div className="total_price">
              <p
                style={{
                  color: "white",
                  borderBottomStyle: "solid",
                  borderColor: "#ea8305",
                }}>
                Итого:
              </p>
              <br />
              <p> общая сумма {item.subPrice} сом</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
}
