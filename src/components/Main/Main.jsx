import React from "react";
import Header from "../Header/Header";

import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import "./main.css";

import Sponsors1 from "../../images/sponsors-1.svg";
import Sponsors2 from "../../images/sponsors-2.svg";
import Sponsors3 from "../../images/sponsors-3.svg";
import Sponsors4 from "../../images/sponsors-4.svg";
import Sponsors5 from "../../images/sponsors-5.svg";
import Sponsors6 from "../../images/sponsors-6.svg";
import Sponsors7 from "../../images/sponsors-7.svg";
import Sponsors8 from "../../images/sponsors-8.svg";
import Sponsors9 from "../../images/sponsors-9.svg";
import Sponsors10 from "../../images/sponsors-10.svg";
import UkuleleFamous from "../../images/ukulele-famous.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Main = () => {
  return (
    <div>
      <Header />
      <main className="hero">
        <div className="container">
          <div className="hero__cards">
            <div className="hero__card">
              <h6>гитары</h6>
            </div>
            <div className="hero__card hero__card-2">
              <h6>укулеле</h6>
            </div>
            <div className="hero__card hero__card-3">
              <h6>аксессуары</h6>
            </div>
            <div className="hero__card hero__card-4">
              <h6>струны</h6>
            </div>
          </div>
        </div>
      </main>
      <div className="sponsors">
        <div className="container">
          <div className="sponsors__content">
            <img src={Sponsors1} alt="" />
            <img src={Sponsors2} alt="" />
            <img src={Sponsors3} alt="" />
            <img src={Sponsors4} alt="" />
            <img src={Sponsors5} alt="" />
            <img src={Sponsors6} alt="" />
            <img src={Sponsors7} alt="" />
            <img src={Sponsors8} alt="" />
            <img src={Sponsors9} alt="" />
            <img src={Sponsors10} alt="" />
          </div>
        </div>
      </div>
      <div className="famous">
        <div className="container">
          <div className="famous__content">
            <Swiper
              className="swiper__wrapper-2"
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              pagination={{ clickable: true }}
              navigation>
              <SwiperSlide>
                <div className="famous__card">
                  <img src={UkuleleFamous} alt="ukulele" />
                  <div className="famous__card-info">
                    <p>Укулеле</p>
                    <h5>Enya EUC-MAD</h5>
                    <s>₽24 890</s>
                    <p className="famous__card-price">₽24 890</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="famous__card">
                  <img src={UkuleleFamous} alt="ukulele" />
                  <div className="famous__card-info">
                    <p>Укулеле</p>
                    <h5>Enya EUC-MAD</h5>
                    <s>₽24 890</s>
                    <p className="famous__card-price">₽24 890</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="famous__card">
                  <img src={UkuleleFamous} alt="ukulele" />
                  <div className="famous__card-info">
                    <p>Укулеле</p>
                    <h5>Enya EUC-MAD</h5>
                    <s>₽24 890</s>
                    <p className="famous__card-price">₽24 890</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="famous__card">
                  <img src={UkuleleFamous} alt="ukulele" />
                  <div className="famous__card-info">
                    <p>Укулеле</p>
                    <h5>Enya EUC-MAD</h5>
                    <s>₽24 890</s>
                    <p className="famous__card-price">₽24 890</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="famous__card">
                  <img src={UkuleleFamous} alt="ukulele" />
                  <div className="famous__card-info">
                    <p>Укулеле</p>
                    <h5>Enya EUC-MAD</h5>
                    <s>₽24 890</s>
                    <p className="famous__card-price">₽24 890</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="famous__card">
                  <img src={UkuleleFamous} alt="ukulele" />
                  <div className="famous__card-info">
                    <p>Укулеле</p>
                    <h5>Enya EUC-MAD</h5>
                    <s>₽24 890</s>
                    <p className="famous__card-price">₽24 890</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="famous__card">
                  <img src={UkuleleFamous} alt="ukulele" />
                  <div className="famous__card-info">
                    <p>Укулеле</p>
                    <h5>Enya EUC-MAD</h5>
                    <s>₽24 890</s>
                    <p className="famous__card-price">₽24 890</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
