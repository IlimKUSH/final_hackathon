import React from "react";

import "./header.css";

import Logo from "../../images/logo.png";
import Search from "../../images/search.svg";
import Cart from "../../images/cart.svg";
import Fav from "../../images/fav.svg";

const HeaderDown = () => {
  return (
    <header className="header-down">
      <div className="container">
        <div className="header-down__content">
          <img className="header-down__logo" src={Logo} alt="logo" />
          <div className="header__search">
            <img src={Search} alt="search" />
            <input placeholder="Поиск" type="text" />
          </div>
          <nav className="header__nav">
            <div className="nav__content">
              <p>КАТАЛОГ</p>
              <p>О НАС</p>
              <p>ОТЗЫВЫ</p>
            </div>
          </nav>
          <div className="header__ftrs">
            <img src={Fav} alt="favorites" />
            <img src={Cart} alt="cart" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDown;
