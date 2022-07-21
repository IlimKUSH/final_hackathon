import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, IconButton, Typography } from "@mui/material";

import Loader from "../Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import "./cart.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

export default function Cart({ item }) {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return cart ? (
    <div className="container">
      <div className="bread">
        <Link to={"/"}>
          <p>главная</p>
        </Link>
        <p>/</p>
        <Link to={"/cart"}>
          <p>корзина</p>
        </Link>
      </div>
      <div style={{ height: "vh" }}></div>
      <div>
        <div className="card-info">
          <img className="card-img" src="" alt="" />
        </div>
      </div>

      <div className="cart">
        <div className="product_in_cart">
          <div>
            {cart.products.map(item => (
              <div className="card_in_cart" key={item.item.id}>
                <div>
                  <img
                    className="cart_img"
                    src={item.item.image}
                    alt="product"
                  />
                </div>
                <div style={{ margin: "5px" }}>
                  <p
                    style={{ color: "white", fontSize: "18px" }}
                    onClick={() => navigate(`/products/${item.id}`)}>
                    {item.item.name}
                  </p>
                  <br />
                  <p style={{ color: "white", fontSize: "24px" }}>
                    {item.item.price}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => changeCount(item.count - 1, item.item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  <p style={{ color: "white" }}>{item.count}</p>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => changeCount(item.count + 1, item.item.id)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => deleteFromCart(item.item.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => navigate(`/details/${item.item.id}`)}>
                    <InfoIcon />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </div>
        {cart.products.map(item => (
          <div className="buy_in_cart" key={item.item.id}>
            <div className="total_price">
              <p
                style={{
                  color: "white",
                  borderBottomStyle: "solid",
                  borderColor: "#ea8305",
                }}>
                Итого:
              </p>
              <br />
              <p> общая сумма {item.subPrice} сом</p>
            </div>
          </div>
        ))}
      </div>

      {/* <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                style={{
                  backgroundColor: "#747164",
                }}>
                <TableCell style={{ color: "white" }}>Продукт</TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Цена
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Количество
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Общая цена
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Информация
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map(row => (
                <TableRow
                  key={row.item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.item.title}
                  </TableCell>
                  <TableCell align="right">{row.item.price}</TableCell>

                  <TableCell align="right">
                    <IconButton
                      onClick={() => changeCount(row.count - 1, row.item.id)}>
                      <RemoveIcon />
                    </IconButton>
                    {row.count}
                    <IconButton
                      onClick={() => changeCount(row.count + 1, row.item.id)}>
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">{row.subPrice}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => deleteFromCart(row.item.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => navigate(`/details/${row.item.id}`)}>
                      <InfoIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box>
          <Typography variant="h4" style={{ color: "white" }}>
            Итоговая цена: {cart.totalPrice} сом
          </Typography>
        </Box>
              </Container> */}
    </div>
  ) : (
    <Loader />
  );
}
