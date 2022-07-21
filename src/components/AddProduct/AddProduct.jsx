import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import HeaderDown from "../Header/HeaderDown";

import "./addProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const { getCategories, categories, createProduct } =
    useContext(productsContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  // console.log(image);
  useEffect(() => {
    getCategories();
  }, []);
  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("name", name);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);
    createProduct(newProduct, navigate);
  }
  console.log(name, description, price, category, image);
  // console.log(category);
  return (
    <div className="container">
      <HeaderDown />
      <div className="add">
        <h6>Добавить продукт</h6>
        <input
          placeholder="name"
          type="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="description"
          type="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          placeholder="price"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <select onChange={e => setCategory(e.target.value)}>
          {categories.map(item => (
            <option>Категория: {item.name}</option>
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
        {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={e => setCategory(e.target.value)}>
            {categories.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}

        <button onClick={handleSave} variant="contained">
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
