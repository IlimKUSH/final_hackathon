import React from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

export default function ProductsCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = React.useContext(productsContext);
  {
    console.log(item);
  }

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
        </div>
      </div>
    </div>
  );
}
