// import React, { useState } from "react";
// import axios from "axios";

// export const authContext = React.createContext();

// const API = "https://backend-for-fs-makers.herokuapp.com/api/v1";

// const AuthContextProvider = ({ children }) => {
//   // const [currentUser, setCurrentUser] = useState(false);
//   // const [error, setError] = useState(false);
//   // const [loading, setLoading] = useState(false);
//   //   async function handleRegister(formData, navigate) {
//   //     setLoading(true);
//   //     try {
//   //       const res = await axios.post(`${API}/account/register/`, formData);
//   //       // console.log(res);
//   //       navigate("/register-success");
//   //     } catch (error) {
//   //       setError(Object.values(error.response.data).flat(2));
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }

//   //   async function handleLogin(formData, email, navigate) {
//   //     try {
//   //       const res = await axios.post(`${API}/account/login/`, formData);
//   //       localStorage.setItem("tokens", JSON.stringify(res.data));
//   //       localStorage.setItem("email", email);
//   //       setCurrentUser(email);
//   //       navigate("/");
//   //       // console.log(res);
//   //     } catch (err) {
//   //       console.log(err);
//   //       setError([err.response.data.detail]);
//   //     }
//   //   }
//   //   async function checkAuth() {
//   //     setLoading(true);
//   //     try {
//   //       const tokens = JSON.parse(localStorage.getItem("tokens"));
//   //       //config
//   //       const Authorization = `Bearer ${tokens.access}`;
//   //       const config = {
//   //         headers: {
//   //           Authorization,
//   //         },
//   //       };
//   //       const res = await axios.post(
//   //         `${API}/account/token/refresh/`,
//   //         {
//   //           refresh: tokens.refresh,
//   //         },
//   //         config
//   //       );
//   //       localStorage.setItem(
//   //         "tokens",
//   //         JSON.stringify({
//   //           access: res.data.access,
//   //           refresh: tokens.refresh,
//   //         })
//   //       );
//   //       const email = localStorage.getItem("email");
//   //       setCurrentUser(email);
//   //     } catch (err) {
//   //       console.log(err);
//   //       handleLogout();
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }
//   //   function handleLogout(navigate) {
//   //     localStorage.removeItem("tokens");
//   //     localStorage.removeItem("email");
//   //     setCurrentUser(false);
//   //     navigate("/login");
//   //   }
//   return (
//     <authContext.Provider
//       value={{
//         currentUser,
//         error,
//         setError,
//         loading,
//         handleRegister,
//         handleLogin,
//         checkAuth,
//         handleLogout,
//       }}>
//       {children}
//     </authContext.Provider>
//   );
// };
// export default AuthContextProvider;
