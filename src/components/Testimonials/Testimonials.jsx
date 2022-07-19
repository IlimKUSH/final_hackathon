import React from "react";
import HeaderDown from "../Header/HeaderDown";
import Rating from "@mui/material/Rating";

import "./testimonials.css";

const Testimonials = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <HeaderDown />
      <div className="contain">
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "36px",
            color: "white",
          }}>
          Отзывы
        </p>
        <div className="revpage-desc">
          Отзывы на Яндекс.Картах -{" "}
          <a
            href="https://yandex.ru/profile/178093785224"
            target="_blank"
            className="revpage-a">
            читать все отзывы
          </a>
        </div>
        <div className="revblock">
          <div className="revblock-revs">
            <div className="revblock-item" id="ec-resource-56-message-18">
              <div className="ritem-right">
                <div className="ritem-top">
                  <div className="ritem-name">Надежда Потапенко</div>
                  <div className="ritem-stars">
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                  </div>
                </div>
                <div className="ritem-content">
                  Хочу выразить благодарность команде Guitar Lavka! Заказывали в
                  подарок семиструнную электроакустическую гитару. Настоящие
                  профессионалы своего дела, внимательное отношение к клиентам,
                  всегда на связи, отвечали на все вопросы, подобрали идеальный
                  инструмент. В связи с сезонной загруженностью (новогодние
                  праздники) сроки доставки были увеличены, и мы не успевали
                  вручить гитару в день рождения. Ребята сняли поздравительное
                  видео, которое скрасило именнику ожидание подарка.
                </div>
                <div className="ritem-date">
                  просмотрено 2022-01-25 20:13:00{" "}
                </div>
              </div>
            </div>
            <div className="revblock-item" id="ec-resource-242-message-19">
              <div className="ritem-right">
                <div className="ritem-top">
                  <div className="ritem-name">Владимир</div>
                  <div className="ritem-stars">
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                  </div>
                </div>
                <div className="ritem-content">
                  Приобрёл по заказу в этом магазине трансакустику. Инструмент
                  потрясающий! Звук совершенно необычный. Яркий и сочный. В
                  домашних условиях электроника даже ни к чему, ну если
                  побаловаться с эффектами только. Но самое главное - это
                  обслуживание. Корректно, с братской заботой, и очень
                  ответственно. Гитара пришла отстроенная, комплект полный. Я,
                  честно говоря ещё такого уровня интернет-сервиса ещё не
                  встречал. По всем вопросам - согласование с покупателем. В
                  наше время - редкость. Молодцы, честное слово - восхищён.
                  Огромное спасибо, не снижайте планку!Максимов Владимир,
                  Алтайский край, г.Бийск
                </div>
                <div className="ritem-date">
                  просмотрено 2021-11-22 14:41:00{" "}
                </div>
              </div>
            </div>
            <div className="revblock-item" id="ec-resource-183-message-17">
              <div className="ritem-right">
                <div className="ritem-top">
                  <div className="ritem-name">Ксения Зуева</div>
                  <div className="ritem-stars">
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                    <span className="ritem-star"></span>
                  </div>
                </div>
                <div className="ritem-content">
                  Отличный магазин с клиентоориентированным
                  подходом!Единственный в России, где нам смогли заказать именно
                  тот инструмент, который был нужен! Да, нужно было подождать
                  саму доставку в Россию, но ответ от поставщиков был готов
                  практически молниеносно - особенно по сравнению с другими
                  магазинами (московскими). Очень порадовала искренняя
                  заинтересованность и любовь к своему делу сотрудников
                  магазина! Всем очень рекомендуем "Гитарную лавку"!
                </div>
                <div className="ritem-date">
                  просмотрено 2021-09-15 14:51:00{" "}
                </div>
              </div>
            </div>
          </div>

          <form
            className="revform ec-form"
            method="post"
            role="form"
            id="ec-form-resource-96"
            data-fid="resource-96"
            action=""
          />
          <div className="form-group ec-antispam">
            <label for="ec-address-resource-96" className="control-label">
              Антиспам поле. Его необходимо скрыть через css
            </label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="ec-address-resource-96"
              value=""
            />
          </div>

          <div className="revform-tit">Добавить отзыв</div>
          <input
            className="revform-input"
            type="text"
            placeholder="Ваше имя..."
            name="user_name"
            id="ec-user_name-resource-96"
            required=""
          />
          <input
            className="revform-input"
            type="text"
            placeholder="Е-mail..."
            name="user_email"
            id="ec-user_email-resource-96"
            required=""
          />
          <textarea
            className="revform-textarea"
            placeholder="Отзыв..."
            name="text"
            id="ec-text-resource-96"
            required=""></textarea>

          <div className="addmark">
            <div className="addmark-cap">Оценка</div>

            <div className="addmark-stars">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
          <div className="revform-bot">
            <button className="revform-button" type="submit" name="send">
              ОТПРАВИТЬ
            </button>
            <a
              href="politika-konfidenczialnosti"
              target="_blank"
              className="revform-polyt">
              Я даю согласие на обработку своих <br />
              персональных данных
            </a>
          </div>
          <div id="ec-form-success-resource-96"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
