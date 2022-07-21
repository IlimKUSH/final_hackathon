import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loader from "../Loader/Loader";

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
        <h5>Name: {oneProduct.name}</h5>
        <h5>Description: {oneProduct.description}</h5>
        <h5>Price: {oneProduct.price}</h5>
        <h5>Category: {oneProduct.category}</h5>
        <img width={300} src={oneProduct.image} alt="product" />
      </div>
    </div>
  );
};

export default Details;
