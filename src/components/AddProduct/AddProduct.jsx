import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const AddProduct = ({ item }) => {
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
  console.log(categories);
  return (
    <div className="container">
      <div className="add">
        <h6>Add product</h6>
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
            <option key={item.id} value={item.id}>
              {console.log(item)}
              {item.name}
            </option>
          ))}
          {/* <option value={category} onChange={e => setCategory(e.target.value)}>
            Пункт 1
          </option>
          <option>Пункт 2</option> */}
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

        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
