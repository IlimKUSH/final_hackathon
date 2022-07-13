import {
  TextField,
  Box,
  Button,
  Container,
  Typography,
  Alert,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./register.css";

const Register = () => {
  const { handleRegister, error, loading } = useContext(authContext);
  console.log(loading);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      // ! 1
      // const newUser = {
      //   email,
      //   password,
      //   password_confirm: passwordConfirm,
      // };
      // ! 2
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData, navigate);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="register">
      <div className="container">
        <div className="register__content">
          <h5>Register</h5>

          {error ? (
            <Box>
              {error.map((item, index) => (
                <Alert severity="error" key={item + index}>
                  {item}
                </Alert>
              ))}
            </Box>
          ) : null}

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
          />
          <input
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            variant="outlined"
            label="Password confirmation"
          />
          <button onClick={handleSave} variant="outlined">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
