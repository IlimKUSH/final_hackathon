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
          <nav className="header__nav">
            <div className="nav__content">
              <p onClick={() => navigate("/catalog")}>КАТАЛОГ</p>
              <p onClick={() => navigate("/about")}>О НАС</p>
              <p onClick={() => navigate("/testimonials")}>ОТЗЫВЫ</p>
              <p onClick={() => navigate("/delivery")}>ДОСТАВКА</p>

              <button onClick={() => navigate("/products")}>Products</button>
              <button onClick={() => navigate("/add")}>Add product</button>

              {/* <div> */}
              {/* {currentUser ? (
                  <div>
                    <h6>{currentUser}</h6>
                    <button onClick={() => handleLogout(navigate)}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => navigate("/login")}>Login</button>
                    <button onClick={() => navigate("/register")}>
                      Register
                    </button>
                  </div>
                )} */}
              {/* </div> */}

              <button onClick={() => navigate("/login")} variant="outlined">
                Login
              </button>
              <button onClick={() => navigate("/register")} variant="outlined">
                Register
              </button>
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
