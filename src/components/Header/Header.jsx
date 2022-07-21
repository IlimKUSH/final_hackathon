import React, { useContext, useEffect } from "react";
import "./header.css";

import Logo from "../../images/logo.png";
import Search from "../../images/search.svg";
import Cart from "../../images/cart.svg";
import Fav from "../../images/fav.svg";
import Swiper from "../Swiper/Swiper";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";
import { Badge, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, checkAuth, loading, count } = useContext(authContext);
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__mid">
            {/* <div className="header__search">
              <img src={Search} alt="search" />
              <input placeholder="Поиск" type="text" />
            </div> */}

            <img src={Logo} alt="logo" />
            <div className="header__ftrs">
              <img
                onClick={() => navigate("/favorites")}
                src={Fav}
                alt="favorites"
              />
              <Badge badgeContent={count}></Badge>
              <img onClick={() => navigate("/cart")} src={Cart} alt="cart" />
            </div>
          </div>
          <nav className="header__nav">
            <div className="nav__content">
              <p onClick={() => navigate("/products")}>КАТАЛОГ</p>

              <p onClick={() => navigate("/about")}>О НАС</p>
              <p onClick={() => navigate("/testimonials")}>ОТЗЫВЫ</p>
              <p onClick={() => navigate("/delivery")}>ДОСТАВКА</p>
              <p onClick={() => navigate("/contacts")}>КОНТАКТЫ</p>
              {currentUser ? (
                <div className="nav__products">
                  <p onClick={() => navigate("/add")}>ДОБАВИТЬ ПРОДУКТ</p>
                </div>
              ) : null}
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

// надо сделать гит пуш
