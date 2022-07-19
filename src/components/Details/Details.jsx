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
