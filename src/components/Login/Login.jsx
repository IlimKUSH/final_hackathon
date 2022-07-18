import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import HeaderDown from "../Header/HeaderDown";

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
        <div display={"flex"} flexDirection={"column"} marginTop={"50px"}>
          <h5>Login</h5>
          {error ? <Alert severity="error">{error}</Alert> : null}
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            label="Email"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            variant="outlined"
            label="Password"
            type="password"
          />
          <button variant="outlined" onClick={handleSave}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
