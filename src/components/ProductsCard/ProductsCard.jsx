import { CardMedia } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import HeaderDown from "../Header/HeaderDown";
import "./ProductCard.css";

export default function ProductsCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = React.useContext(productsContext);
  console.log(item);
  return (
    <div>
      <div style={{ display: "flex" }} className="products ">
        <div className="container">
          <div className="products_item">
            <div className="products__content">
              <img className="products_img" src={item.image} alt="qweqwe" />
              <p style={{ fontSize: "14px", color: "white" }}>{item.name}</p>
              <br />
              <p style={{ fontSize: "24px", color: "white" }}>
                {item.price} сом
              </p>
              <h3>{item.category}</h3>
              <button onClick={() => deleteProduct(item.id)}>delete</button>
              <button onClick={() => navigate(`/edit/${item.id}/`)}>
                edit
              </button>
              <button onClick={() => navigate(`/products/${item.id}`)}>
                details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
