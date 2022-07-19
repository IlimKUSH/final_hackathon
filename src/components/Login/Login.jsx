import { Alert } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import HeaderDown from "../Header/HeaderDown";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }
  useEffect(() => {
    setError(false);
  }, []);
  // console.log(error);
  return (
    <div>
      <HeaderDown />
      <div className="container">
        <div className="login">
          <h2>Авторизация</h2>
          {error ? <Alert severity="error">{error}</Alert> : null}
          <div className="login__content">
            <p>
              Логин <span>*</span>
            </p>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              variant="outlined"
              label="Email"
            />
            <small>
              Укажите email, которые вы использовали при регистрации.
            </small>
            <p>Пароль</p>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              variant="outlined"
              label="Password"
              type="password"
            />
            <small>
              Укажите пароль, которые вы использовали при регистрации.
            </small>
          </div>
          <div className="login__btns">
            <button variant="outlined" onClick={handleSave}>
              Вход
            </button>
            <button variant="outlined" onClick={() => navigate("/register")}>
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
