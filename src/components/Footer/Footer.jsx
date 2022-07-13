import React from "react";
import Image from "./imageFooter/GuitarLavka.png";
import ImageInst from "./imageFooter/FooterInstagram.png";
import ImageWhats from "./imageFooter/Whats.png";
import ImageTelegram from "./imageFooter/Telegram.png";
import ImageVk from "./imageFooter/Vk.png";
import ImageViber from "./imageFooter/Viber.png";
import ImageYoutube from "./imageFooter/Youtube.png";
import ImageInsta from "./imageFooter/Insta.png";
import ImageVisa from "./imageFooter/Visa.png";
import ImageVisa1 from "./imageFooter/Visa1.png";
import ImagePp from "./imageFooter/Pp.png";
import ImageIpay from "./imageFooter/Ipay.png";

import "./Footer.css";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer_left">
          <div>
            <img className="firstImage" src={Image} alt="" />
            <p>
              Мы работаем по всей России,
              <br /> поэтому можем сделать онлайн-показ <br />
              инструмента и доставить его до вашей двери
            </p>
          </div>
          <div className="footer_contacts">
            <p>Остались вопросы?</p>
            <p>8 (800) 100-26-80</p>
            <br />
            <p>ЕЖЕДНЕВНО 10:00 - 20:00</p>
            <p>info@guitarlavka.ru</p>
          </div>
          <div className="footer_ssylki">
            <img className="footer_whats" src={ImageWhats} alt="" />
            <img className="footer_whats" src={ImageTelegram} alt="" />
            <img className="footer_whats" src={ImageVk} alt="" />
            <img className="footer_whats" src={ImageViber} alt="" />
            <img className="footer_whats" src={ImageYoutube} alt="" />
            <img className="footer_whats" src={ImageInsta} alt="" />
          </div>
          <p className="footer_so">СПОСОБЫ ОПЛАТЫ</p>
          <div className="footer_oplata">
            <img src={ImageVisa} alt="" />
            <img src={ImageVisa1} alt="" />
            <img src={ImagePp} alt="" />
            <img src={ImageIpay} alt="" />
          </div>
          <p className="footer_end">
            © 2021 GuitarLavka - музыкальный магазин
            <br /> Политика конфиденциальности
          </p>
        </div>
        <div className="footer_right">
          <div className="footer_catalog">
            <div>
              <p>КАТАЛОГ</p>
              <p style={{ marginTop: "11px" }}>Гитары</p>
              <p>Укулеле</p>
              <p>Аксесуары</p>
              <p>Струны</p>
            </div>
            <div>
              <p>СЕРВИС</p>
              <p style={{ marginTop: "11px" }}>Оплата</p>
              <p>Гарантия</p>
              <p>Доставка</p>
            </div>
            <div>
              <p>УСЛУГИ</p>
              <p style={{ marginTop: "11px" }}>Ремонт</p>
              <p>Онлайн подбор</p>
              <p>Обучение</p>
              <p>Комиссионка</p>
            </div>
          </div>
          <img className="image_inst" src={ImageInst} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
