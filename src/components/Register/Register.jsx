import { Box, Alert } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./register.css";

const Register = () => {
  const { handleRegister, error, setError, loading } = useContext(authContext);
  // console.log(loading);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    if (
      !email.trim() ||
      // !name.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      // formData.append("name", name);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData, navigate);
    }
  }
  useEffect(() => {
    setError(false);
  }, []);

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
            placeholder={"email"}
          />
          {/* <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={"name"}
          /> */}
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            label="Password"
          />
          <input
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            label="Password confirmation"
          />
          <button onClick={handleSave}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
