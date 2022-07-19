// import {
//   Alert,
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { authContext } from "../../contexts/authContext";
// import Loader from "../Loader/Loader";
// const Register = () => {
//   const { handleRegister, error, setError, loading } = useContext(authContext);
//   console.log(loading);
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirm, setPasswordConfirm] = useState("");
//   function handleSave() {
//     if (
//       !name.trim() ||
//       !email.trim() ||
//       !password.trim() ||
//       !passwordConfirm.trim()
//     ) {
//       //  1
//       // const newUser = {
//       //   email,
//       //   password,
//       //   password_confirm: passwordConfirm,
//       // };
//       // 2
//       alert("Заполните поля!");
//     } else {
//       let formData = new FormData();
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("password_confirm", passwordConfirm);
//       handleRegister(formData, navigate);
//     }
//   }
//   useEffect(() => {
//     setError(false);
//   }, []);
//   if (loading) {
//     return <Loader />;
//   }
//   return (
//     <Container maxWidth="sm">
//       <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
//         <Typography variant="h5">Register</Typography>
//         {error ? (
//           <Box>
//             {error.map((item, index) => (
//               <Alert severity="error" key={item + index}>
//                 {item}
//               </Alert>
//             ))}
//           </Box>
//         ) : null}
//         <TextField
//           value={name}
//           onChange={e => setName(e.target.value)}
//           variant="outlined"
//           label="name"
//         />
//         <TextField
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           variant="outlined"
//           label="Email"
//         />
//         <TextField
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           variant="outlined"
//           label="Password"
//         />
//         <TextField
//           value={passwordConfirm}
//           onChange={e => setPasswordConfirm(e.target.value)}
//           variant="outlined"
//           label="Password confirmation"
//         />
//         <Button onClick={handleSave} variant="outlined">
//           Register
//         </Button>
//       </Box>
//     </Container>
//   );
// };
// export default Register;

import { Box, Alert } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./register.css";
import HeaderDown from "../Header/HeaderDown";

const Register = () => {
  const { handleRegister, error, setError, loading } = useContext(authContext);
  // console.log(loading);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSave() {
    if (
      !email.trim() ||
      !name.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
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
      <HeaderDown />

      <div className="container">
        <h2 className="register__title">Регистрация</h2>
        <div className="login__content">
          {error ? (
            <Box>
              {error.map((item, index) => (
                <Alert severity="error" key={item + index}>
                  {item}
                </Alert>
              ))}
            </Box>
          ) : null}

          <p>
            Email <span>*</span>
          </p>
          <input value={email} onChange={e => setEmail(e.target.value)} />
          <p>
            Имя <span>*</span>
          </p>
          <input value={name} onChange={e => setName(e.target.value)} />
          <p>
            Пароль <span>*</span>
          </p>
          <input value={password} onChange={e => setPassword(e.target.value)} />
          <p>
            Подтверждение пароля <span>*</span>
          </p>
          <input
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
          />
          <button className="register__btn" onClick={handleSave}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
