import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, error } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }
  // console.log(error);
  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
        <Typography variant="h5">Login</Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
          label="Email"
        />
        <TextField
          value={password}
          onChange={e => setPassword(e.target.value)}
          variant="outlined"
          label="Password"
          type="password"
        />
        <Button variant="outlined" onClick={handleSave}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
