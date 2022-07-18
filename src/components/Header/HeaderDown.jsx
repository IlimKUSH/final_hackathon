import React from "react";

import "./header.css";

import Logo from "../../images/logo.png";
import Search from "../../images/search.svg";
import Cart from "../../images/cart.svg";
import Fav from "../../images/fav.svg";
import { Link, useNavigate } from "react-router-dom";

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
              <p onClick={() => navigate("/contacts")}>КОНТАКТЫ</p>
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
          <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
            <ul class="menu__box">
              <img src={Logo} alt="logo" />
              <p>Главная / Меню</p>
              <li className="menu__box-item">
                <Link to={"/catalog"} class="menu__item" href="#">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to={"/about"} class="menu__item" href="#">
                  О нас
                </Link>
              </li>
              <li>
                <Link to={"/testimonials"} class="menu__item" href="#">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to={"/delivery"} class="menu__item" href="#">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to={"/contacts"} class="menu__item" href="#">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDown;
