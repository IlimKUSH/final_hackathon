import React, { useContext } from "react";
import "./header.css";

import Logo from "../../images/logo.png";
import Search from "../../images/search.svg";
import Cart from "../../images/cart.svg";
import Fav from "../../images/fav.svg";
import Swiper from "../Swiper/Swiper";
import { useNavigate } from "react-router-dom";
// import { authContext } from "../../contexts/authContext";

const Header = () => {
  const navigate = useNavigate();
  // const { currentUser, handleLogout } = useContext(authContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__mid">
            <div className="header__search">
              <img src={Search} alt="search" />
              <input placeholder="Поиск" type="text" />
            </div>
            <img src={Logo} alt="logo" />
            <div className="header__ftrs">
              <img
                onClick={() => navigate("/favorites")}
                src={Fav}
                alt="favorites"
              />
              <img onClick={() => navigate("/cart")} src={Cart} alt="cart" />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-container">
        <Swiper />
      </div>
    </header>
  );
};

export default Header;

// надо сделать гит пуш
