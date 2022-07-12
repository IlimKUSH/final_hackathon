import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import Logo from "../../images/logo.png";
import Search from "../../images/search.svg";
import Cart from "../../images/cart.svg";
import Fav from "../../images/fav.svg";
import Swiper from "../Swiper/Swiper";

const Header = () => {
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
              <img src={Fav} alt="favorites" />
              <img src={Cart} alt="cart" />
            </div>
          </div>
          <nav className="header__nav">
            <div className="nav__content">
              <p>КАТАЛОГ</p>
              <p>О НАС</p>
              <p>ОТЗЫВЫ</p>
            </div>
          </nav>
        </div>
      </div>
      <div className="swiper-container">
        <Swiper />
      </div>
    </header>
  );
};

export default Header;
