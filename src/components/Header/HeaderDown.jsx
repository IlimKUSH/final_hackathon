import React from "react";

import "./header.css";

import Logo from "../../images/logo.png";
import Search from "../../images/search.svg";
import Cart from "../../images/cart.svg";
import Fav from "../../images/fav.svg";
import { useNavigate } from "react-router-dom";

const HeaderDown = () => {
  const navigate = useNavigate();

  return (
    <header className="header-down">
      <div className="container">
        <div className="header-down__content">
          <img
            onClick={() => navigate("/")}
            className="header-down__logo"
            src={Logo}
            alt="logo"
          />
          <div className="header__search">
            <img src={Search} alt="search" />
            <input placeholder="Поиск" type="text" />
          </div>
          <nav className="header__nav">
            <div className="nav__content">
              <p onClick={() => navigate("/catalog")}>КАТАЛОГ</p>
              <p onClick={() => navigate("/about")}>О НАС</p>
              <p onClick={() => navigate("/testimonials")}>ОТЗЫВЫ</p>
              <p onClick={() => navigate("/delivery")}>ДОСТАВКА</p>
            </div>
          </nav>
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
    </header>
  );
};

export default HeaderDown;
