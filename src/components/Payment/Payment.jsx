import React from "react";
import Cards from "react-credit-cards";
import "./payment.css";
import "react-credit-cards/es/styles-compiled.css";
import HeaderDown from "../Header/HeaderDown";
import { color } from "@mui/system";
import { TextField } from "@mui/material";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <HeaderDown />
        <div className="main">
          <h1
            style={{
              position: "absolute",
              width: "637px",
              height: "41px",
              left: "101px",
              top: "197px",
              color: "white",
            }}>
            Оформление заказа
          </h1>

          <div style={{ height: "20vh" }}></div>

          <h3>Укажите данные получателя</h3>
          <div className="selection">
            <div style={{ display: "flex" }}>
              <input
                className="inp_data"
                type="text"
                placeholder="   имя, фамилия"
              />
              <input
                className="inp_data"
                type="text"
                placeholder="   email..."
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                className="number"
                // style={{ width: "460px" }}
                type="text"
                placeholder="   телефон..."
              />
              <textarea
                className="text"
                style={{ width: "500px", height: "142px" }}
                type="text"
                placeholder="   комментарии к заказу..."></textarea>
            </div>
          </div>

          <div style={{ height: "20vh" }}></div>

          <div className="selection">
            <h3>Скидки к заказу</h3>
            <div style={{ display: "flex" }}>
              <input
                style={{ marginRight: "5px" }}
                className="number"
                type="text"
                placeholder="   Укажите промо-код"
              />
              <button className="promo">Применить</button>
            </div>
          </div>

          <div style={{ height: "5vh" }}></div>

          <div className="selection">
            <Cards
              number={this.state.number}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              cvc={this.state.cvc}
            />
            <form>
              <input
                className="card"
                type="tel"
                name="number"
                placeholder="   card number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                className="card"
                type="tel"
                name="expiry"
                placeholder="   valid thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                className="card"
                type="tel"
                name="name"
                placeholder="   name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                className="card"
                type="tel"
                name="cvc"
                placeholder="   cvc"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
            <div>
              <button className="order">оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//   return (
//
//   );

// export default Payment;
