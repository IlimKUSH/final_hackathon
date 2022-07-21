import { IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

import { PhotoCamera } from "@mui/icons-material";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    getCategories,
    categories,
    getOneProduct,
    oneProduct,
    updateProduct,
  } = useContext(productsContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (oneProduct) {
      setName(oneProduct.name);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category.id);
    }
  }, [oneProduct]);
  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);
  function handleSave() {
    let editedProduct = new FormData();
    editedProduct.append("name", name);
    editedProduct.append("description", description);
    editedProduct.append("price", price);
    editedProduct.append("category", category);
    if (image) {
      editedProduct.append("image", image);
    }
    updateProduct(id, editedProduct, navigate);
  }
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
          <p>Редактирование</p>
        </div>
        <div className="edit__content">
          <h3>Edit product</h3>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="description"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="price"
            type="text"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <select value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(item => (
              <option>{item.name}</option>
            ))}
          </select>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={e => setImage(e.target.files[0])}
            />
            <PhotoCamera />
          </IconButton>
          {image ? <Typography variant="span">{image.name}</Typography> : null}
          <button onClick={handleSave}>save</button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
