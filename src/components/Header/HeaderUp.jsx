import React, { useContext } from "react";

import "./header.css";

import Whats from "../../images/wats.svg";
import Tg from "../../images/tg.svg";
import Vk from "../../images/vk.svg";
import Viber from "../../images/viber.svg";
import Youtube from "../../images/youtube.svg";
import Inst from "../../images/inst.svg";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const HeaderUp = () => {
  const { currentUser, handleLogout } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__up">
            <p>Ваш город: Бишкек</p>
            <div className="header__socials">
              <img src={Whats} alt="whatsapp" />
              <img src={Tg} alt="telegram" />
              <img src={Vk} alt="vk" />
              <img src={Viber} alt="viber" />
              <img src={Youtube} alt="youtube" />
              <img src={Inst} alt="instagram" />
            </div>
            <div className="user">
              <p>{currentUser}</p>
              {currentUser ? (
                <button
                  className="btn__register"
                  onClick={() => handleLogout(navigate)}>
                  Logout
                </button>
              ) : (
                <div>
                  <button
                    className="btn__login"
                    onClick={() => navigate("/login")}>
                    Login
                  </button>
                  <button
                    className="btn__register"
                    onClick={() => navigate("/register")}>
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderUp;
