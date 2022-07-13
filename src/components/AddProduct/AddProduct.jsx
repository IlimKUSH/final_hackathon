import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { productsContext } from "../../contexts/productsContext";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
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
  // useEffect(() => {
  //   getCategories();
  // }, []);
  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("name", name);
    newProduct.append("description", description);
    newProduct.append("price", price);
    // newProduct.append("category", category);
    newProduct.append("image", image);
    createProduct(newProduct, navigate);
  }
  console.log("cat");
  return (
    <div className="container">
      <div className="add-product">
        <h6>Add product</h6>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
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
          dobavit
        </IconButton>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddProduct;
