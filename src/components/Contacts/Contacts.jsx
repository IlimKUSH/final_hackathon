import React from "react";
import "./contacts.css";

import Telefon from "../../images/telefon.svg";
import Instagram from "../../images/inst.svg";
import Location from "../../images/location.svg";
import Email from "../../images/email.svg";
import Telegramm from "../../images/telegramm.svg";
import Viber from "../../images/viberr.svg";
import Vats from "../../images/vats.svg";
import Vk from "../../images/vk.svg";
import YouTube from "../../images/youtub.svg";
import Map from "../../images/map.png";
import Metro from "../../images/metro.svg";
import Shop from "../../images/shop.png";
import ShopLeft from "../../images/shop_left.png";
import ShopOut from "../../images/shop_out.png";
import ShopRight from "../../images/shop_right.png";

const Contacts = () => {
  return (
    <div>
      <div className="hcontacts">
        <div className="contain">
          <h2 className="h2-line show-575">Контакты</h2>
          <div className="contain-979">
            <div className="hcontacts-tit">Как с нами связаться?</div>
            <p className="hcontacts-p">
              Наши мастера очень хотят вам помочь и ответить на все ваши
              вопросы. Если вы не хотите ждать, попробуйте поискать ответ на ваш
              вопрос в списке ниже. Спасибо за понимание!
            </p>
            <div className="hcontacts-row">
              <div className="hcontacts-l">
                <div className="hcontacts-map-w">
                  <img src={Map} />
                </div>
              </div>
              <div className="hcontacts-r">
                <div className="hcontacts-item-col">
                  <div className="contsitem">
                    <div className="hcontacts-item-img-w">
                      <img src={Telefon} className="hcontacts-item-img" />
                    </div>
                    <div className="hcontacts-item-content">
                      <div className="hcontacts-item-title">Звонок</div>
                      <a
                        href="tel:8 (800) 100-26-80"
                        className="hcontacts-item-link">
                        8 (800) 100-26-80
                      </a>
                      <div className="hcontacts-item-socs">
                        <a
                          href="https://tlgg.ru/guitarlavka"
                          rel="nofollow"
                          target="_blank"
                          className="hcontacts-item-soc">
                          <img src={Telegramm} />
                        </a>
                        <a
                          href="viber://chat?number=79649778838"
                          rel="nofollow"
                          target="_blank"
                          className="hcontacts-item-soc">
                          <img src={Viber} />
                        </a>
                        <a
                          href="https://api.whatsapp.com/send?phone=79649778838"
                          rel="nofollow"
                          target="_blank"
                          className="hcontacts-item-soc">
                          <img src={Vats} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="contsitem">
                    <div className="hcontacts-item-img-w">
                      <img src={Location} />
                    </div>
                    <div className="hcontacts-item-content">
                      <div className="hcontacts-item-title">Адрес</div>
                      <p className="hcontacts-item-p">
                        г. Самара, ТЦ "Сила Спорта", Московское ш., 17, этаж 2
                      </p>
                    </div>
                  </div>
                  <div className="contsitem">
                    <div className="hcontacts-item-img-w">
                      <img src={Email} />
                    </div>
                    <div className="hcontacts-item-content">
                      <div className="hcontacts-item-title">Почта</div>
                      <a
                        href="mailto:guitarlavka@yandex.ru"
                        className="hcontacts-item-link">
                        guitarlavka@yandex.ru
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hcontacts-item-col-2">
                  <div className="contsitem">
                    <div className="hcontacts-item-img-w">
                      <img src={Instagram} />
                    </div>
                    <div className="hcontacts-item-content">
                      <div className="hcontacts-item-title">Инстаграм</div>
                      <a
                        href=""
                        rel="nofollow"
                        target="_blank"
                        className="hcontacts-item-link"></a>
                    </div>
                  </div>
                  <div className="contsitem">
                    <div className="hcontacts-item-img-w">
                      <img src={Vk} />
                    </div>
                    <div className="hcontacts-item-content">
                      <div className="hcontacts-item-title">ВКонтакте</div>
                      <a
                        href="https://vk.com/guitar_lavka"
                        rel="nofollow"
                        target="_blank"
                        className="hcontacts-item-link">
                        https://vk.com/guitar_lavka
                      </a>
                    </div>
                  </div>
                  <div className="contsitem">
                    <div className="hcontacts-item-img-w">
                      <img src={YouTube} />
                    </div>
                    <div className="hcontacts-item-content">
                      <div className="hcontacts-item-title">Ютуб</div>
                      <a
                        href="https://www.youtube.com/channel/UCOtmHwYhxhqGokpQEbLE3RA"
                        rel="nofollow"
                        target="_blank"
                        className="hcontacts-item-link">
                        https://www.youtube.com/channel/UCOtmHwYhxhqGokpQEbLE3RA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="getus">
        <div className="contain">
          <div className="contain-979">
            <div className="getus-w">
              <div className="getus-l">
                <h2 className="h2-left">Как до нас добраться?</h2>
                <div className="getus-adr-item">
                  <div className="getus-adr-row">
                    <div className="getus-adr-img-w">
                      <img src={Metro} />
                    </div>
                    <div className="getus-adr-txt">Московская</div>
                  </div>
                  <p>
                    Автобус: 1, 37, 67
                    <br />
                    Троллейбус: 12, 17, 20
                    <br />
                    Маршрутное такси: 46, 126с, 126ю, 410а
                  </p>
                </div>
                <div className="getus-desc-item">
                  <p className="getus-desc-p2">
                    <strong>На общественном транспорте</strong>
                  </p>
                  <p className="getus-desc-p">
                    Выходите на остановке "Метро Московская", идете по
                    Московскому шоссе 200 метров прямо (в сторону рынка
                    Караван), переходите дорогу по подземному переходу, и
                    оказываетесь прямо перед ТЦ "Сила спорта", поднимаетесь на
                    второй этаж, идете до конца коридора и первая секция направо
                    (ориентир лифты и бар кинотеатра) Вы - на месте!
                  </p>
                </div>
                <div className="getus-desc-item">
                  <p className="getus-desc-p2">
                    <strong>На автомобиле</strong>
                  </p>
                  <p className="getus-desc-p">
                    Если Вы едете из города, то поворачиваете на парковку ТЦ
                    "Вертикаль" (ориентир статуя коня), паркуетесь, и
                    оказываетесь прямо перед ТЦ "Вертикаль", поднимаетесь на
                    второй этаж, идете до конца коридора и первая секция налево
                    (ориентир бар кинотеатра) Вы - на месте!
                  </p>
                </div>
              </div>
              <div className="getus-r">
                <a
                  data-fancybox="gallery-3"
                  href="/assets/cache_image/img/cont/121273185-4676318269106134-865115628012031507-n_1000x0_fdf.jpg"
                  className="getus-gal-item">
                  <img src={Shop} className="getus-gal-img" />
                </a>
                <a
                  data-fancybox="gallery-3"
                  href="/assets/cache_image/img/cont/125878282-1646387105542088-3722281510296862699-n_1000x0_fdf.jpg"
                  className="getus-gal-item">
                  <img src={ShopLeft} className="getus-gal-img" />
                </a>
                <a
                  data-fancybox="gallery-3"
                  href="/assets/cache_image/img/cont/128738039-832090224243662-6046998934959788868-n_1000x0_fdf.jpg"
                  className="getus-gal-item">
                  <img src={ShopRight} className="getus-gal-img" />
                </a>
                <a
                  data-fancybox="gallery-3"
                  href="/assets/cache_image/img/cont/142982519-427726531980177-5904940855452608906-n_1000x0_fdf.jpg"
                  className="getus-gal-item">
                  <img src={ShopOut} className="getus-gal-img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
