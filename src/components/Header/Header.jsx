import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import Logo from "../../images/logo.png";
import Whats from "../../images/wats.svg";
import Tg from "../../images/tg.svg";
import Vk from "../../images/vk.svg";
import Viber from "../../images/viber.svg";
import Youtube from "../../images/youtube.svg";
import Inst from "../../images/inst.svg";
import Tel from "../../images/tel.svg";
import Search from "../../images/search.svg";
import Cart from "../../images/cart.svg";
import Fav from "../../images/fav.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__up">
            <p>Ваш город: Самара</p>
            <div className="header__socials">
              <img src={Whats} alt="whatsapp" />
              <img src={Tg} alt="telegram" />
              <img src={Vk} alt="vk" />
              <img src={Viber} alt="viber" />
              <img src={Youtube} alt="youtube" />
              <img src={Inst} alt="instagram" />
            </div>
            <div className="header__tel">
              <Link to={"tel:8 (800) 100 26 80"}>
                {" "}
                <img src={Tel} alt="phone" /> 8 (800) 100 26 80
              </Link>
            </div>
          </div>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
