import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderDown from "../Header/HeaderDown";
import "./delivery.css";

const Delivery = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderDown />
      <div className="deliv-page">
        <div className="contain">
          <div className="path">
            <p onClick={() => navigate("/")}>Главная</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                fill="#414141"
              />
            </svg>
            <p>Доставка</p>
          </div>
          <div className="contain-1001">
            <h2>Доставка</h2>
            <div className="deliv-tbl">
              <div className="deliv-row-item deliv-row-item-top">
                <div className="deliv-row-tit">Самовывоз</div>
                <div className="deliv-row">
                  <div className="deliv-col-1">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">СРОКИ</div>
                      <div className="deliv-col-txt">Сегодня</div>
                    </div>
                  </div>
                  <div className="deliv-col-2">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">СТОИМОСТЬ</div>
                      <div className="deliv-col-txt">Бесплатно</div>
                    </div>
                  </div>
                  <div className="deliv-col-3">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">ОПИСАНИЕ</div>
                      <div className="deliv-col-txt">
                        Забрать в магазине по адресу ТЦ Вертикаль, Московское
                        шоссе 17
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="deliv-row-item">
                <div className="deliv-row-tit">Boxberry</div>
                <div className="deliv-row">
                  <div className="deliv-col-1">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">СРОКИ</div>
                      <div className="deliv-col-txt">от 3 дней</div>
                    </div>
                  </div>
                  <div className="deliv-col-2">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">СТОИМОСТЬ</div>
                      <div className="deliv-col-txt">от 250 рублей</div>
                    </div>
                  </div>
                  <div className="deliv-col-3">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">ОПИСАНИЕ</div>
                      <div className="deliv-col-txt">
                        Доставка до пункта выдачи BoxBerry
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="deliv-row-item">
                <div className="deliv-row-tit">Почта России</div>
                <div className="deliv-row">
                  <div className="deliv-col-1">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">СРОКИ</div>
                      <div className="deliv-col-txt">от никогда</div>
                    </div>
                  </div>
                  <div className="deliv-col-2">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">СТОИМОСТЬ</div>
                      <div className="deliv-col-txt">от 200 рублей</div>
                    </div>
                  </div>
                  <div className="deliv-col-3">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">ОПИСАНИЕ</div>
                      <div className="deliv-col-txt">
                        Обыкновенная посылка. Наземная доставка по России с
                        низким тарифом по весу
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="deliv-row-item deliv-row-item-bot">
                <div className="deliv-row-tit">CDEK</div>
                <div className="deliv-row">
                  <div className="deliv-col-1">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">СРОКИ</div>
                      <div className="deliv-col-txt">от 3 дней</div>
                    </div>
                  </div>
                  <div className="deliv-col-2">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">СТОИМОСТЬ</div>
                      <div className="deliv-col-txt">от 300 рублей</div>
                    </div>
                  </div>
                  <div className="deliv-col-3">
                    <div className="deliv-col-it">
                      <div className="deliv-col-tit">ОПИСАНИЕ</div>
                      <div className="deliv-col-txt">
                        Доставка пункта выдачи или указанного до адреса с
                        возможностью оплаты при получении.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vidblock vidblock-8">
          <div className="vidblock-row-1">
            <div className="contain">
              <div className="vidblock-tit show-575">
                БЕРЕЖНО УПАКОВЫВАЕМ КАЖДЫЙ ИНСТУМЕНТ
              </div>
              <div className="vidblock-row">
                <div className="vidblock-vid vidblock-vid-8">
                  <iframe
                    width={"100%"}
                    height={"100%"}
                    src="https://www.youtube.com/embed/oIMAJ6IKkXM"
                    title="YouTube video player"
                    frameBorder={"0"}
                    allow={
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    }
                    allowfullscreen=""></iframe>
                </div>
                <div className="vidblock-r">
                  <div className="vidblock-tit hide-575">
                    БЕРЕЖНО УПАКОВЫВАЕМ КАЖДЫЙ ИНСТУМЕНТ
                  </div>

                  <ul className="vidblock-ul">
                    <li className="vidblock-li">Термопакет</li>

                    <li className="vidblock-li">Чехол</li>

                    <li className="vidblock-li">3 слоя пузырчатой бумаги</li>

                    <li className="vidblock-li">Картонная коробка</li>

                    <li className="vidblock-li">Страхуем груз</li>

                    <li className="vidblock-li">Бережная доставка</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
