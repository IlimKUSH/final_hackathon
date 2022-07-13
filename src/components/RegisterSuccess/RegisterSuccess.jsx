import React from "react";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <div className="container">
      Вы успешно зарегистрировались! Можете <Link to="/login">войти</Link> в
      свой аккаунт
    </div>
  );
};

export default RegisterSuccess;
