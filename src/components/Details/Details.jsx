import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Comments from "../Comments/Comments";
import HeaderDown from "../Header/HeaderDown";
import Loader from "../Loader/Loader";

import "./details.css";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  if (!oneProduct) {
    return <Loader />;
  }
  console.log(oneProduct);
  return (
    <div>
      <div className="container">
        <HeaderDown />
        <div className="path">
          <p onClick={() => navigate("/")}>Главная</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
              fill="#414141"
            />
          </svg>
          <p>Детальный просмотр</p>
        </div>
        <div className="details__content">
          <div className="details">
            <h3>Название: {oneProduct.name}</h3>
            <h3>Описание: {oneProduct.description}</h3>
            <h3>Цена: {oneProduct.price}</h3>
            <h3>Категория: {oneProduct.category}</h3>
            <img width={300} src={oneProduct.image} alt="product" />
            <Comments comments={oneProduct.comments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
