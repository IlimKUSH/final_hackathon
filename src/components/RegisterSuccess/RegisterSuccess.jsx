import React from "react";
import { Link } from "react-router-dom";

const RegissterSuccess = () => {
  return (
    <div className="container">
      Вы успешно зарегистрировались! Можете <Link to="/login">войти</Link> в
      свой аккаунт
    </div>
  );
};

export default RegissterSuccess;
