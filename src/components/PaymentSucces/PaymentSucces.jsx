import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderDown from "../Header/HeaderDown";
import "./PaymentSucces.css";

const PaymentSucces = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderDown />
      <div className="contain">
        <h1 className="h-1">Ваш заказ оформлен!</h1>
        <div className="thanks">
          <div id="txt-1">БЛАГОДАРИМ ЗА ЗАКАЗ!</div>
          <div id="txt-2">
            Оформлeние прошло успешно!
            <br /> Начинаем собирать! <br /> Наш специалист скоро с вами
            свяжется
          </div>
          <a id="thnx-back" onClick={() => navigate("/catalog")}>
            вернуться к каталогу
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucces;
