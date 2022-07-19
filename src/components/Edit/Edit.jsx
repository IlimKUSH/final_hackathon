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
