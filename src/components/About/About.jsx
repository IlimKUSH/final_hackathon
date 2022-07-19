import React from "react";
import HeaderDown from "../Header/HeaderDown";
import "./about.css";
import { Swiper, SwiperSlide } from "swiper/react";

//! IMAGES
import Anon from "../../images/Anon.png";
import Gitar from "../../images/gitar.png";
import Vk from "../../images/vkontakte.svg";
import YouTube from "../../images/youtub.svg";
import ShopIn from "../../images/shop-in.png";
import ShopOut from "../../images/shop-out.png";
import ShopLeft from "../../images/shop-left.png";

import { A11y, Navigation, Pagination } from "swiper";
import { Container } from "@mui/system";
//! IMAGES

// import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const About = () => {
  return (
    <>
      <>
        <HeaderDown />
      </>
      <div className="we">
        <div className="contain">
          <h2 style={{ textAlign: "center", fontSize: "36px", color: "white" }}>
            Мы
          </h2>
          <div className="we-w">
            <div className="we-it-w">
              <div className="we-it">
                {/* <a href="#" className="we-it"> */}

                <div className="we-img-w">
                  <img
                    src={Anon}
                    className="we-img"
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">Максат </div>
                      <p>
                        <span className="block-text">
                          Главный поборник прав и морали, знаком с певицей
                          гречкой. В совершенстве владеет китайским
                          коммерческим, китайским матерным. При необходимости с
                          помощью телефона может организовать встречу с Трампом,
                          Папой Римским и Джоном Леноном.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Максат</div>
              </div>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img
                    src={Anon}
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                    className="we-img"
                  />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">Алихан </div>
                      <p>
                        <span className="block-text">
                          Скоростной ремонт помещений за 7 минут: дизайн,
                          разработка и воплощение. Расставляет по местам гитары
                          и людей.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Алихан</div>
              </a>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img
                    src={Anon}
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                    className="we-img"
                  />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">Эрмек </div>
                      <p>
                        <span className="block-text">
                          Получил звание Гитар Гитарыч от своих учеников.
                          Обычный человек состоит на 80% из воды, а Эрмек из
                          шуток, анекдотов и филологических афоризмов.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Эрмек</div>
              </a>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img
                    src={Anon}
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                    className="we-img"
                  />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">Илим </div>
                      <p>
                        <span className="block-text">
                          Знаком с Лениным, Александром Македонским, Вещим
                          Олегом ибо имеет диплом учителя истории. Быстро понял,
                          что гитары лучше, чем дети. На данный момент готовит к
                          сдаче свою 74-ю мастеровую гитару.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Илим</div>
              </a>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img
                    src={Anon}
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                    className="we-img"
                  />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">Жоомарт</div>
                      <p>
                        <span className="block-text">
                          Заведует маркетингом. Уже 3-й раз приносит свой
                          телекастер на продажу, но постоянно уносит обратно.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Жоомарт</div>
              </a>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img
                    src={Anon}
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                    className="we-img"
                  />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">Бектур </div>
                      <p>
                        <span className="block-text">
                          Поглощает оливки, пьет из амфоры. С помощью
                          дендро-фекальной методики собирает гитару из любых
                          подручных материалов.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Бектур</div>
              </a>
            </div>
          </div>
        </div>
        <div className="wehere">
          <div className="contain_2" style={{ marginTop: "100px" }}>
            <div className="wehere-w">
              <div className="wehere-l">
                <div className="service-tit">Мы здесь есть</div>
                <div className="wehere-txt">
                  не стоит переживать за актуальность информации, мы
                  ответственно подходим к этому вопросу
                </div>
                <div className="wehere-soc-w">
                  <a href="https://vk.com/guitar_lavka" class="foot-cont-soc">
                    <img src={Vk} className="foot-cont-soc-img" />
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCOtmHwYhxhqGokpQEbLE3RA"
                    className="foot-cont-soc">
                    <img src={YouTube} className="foot-cont-soc-img" />
                  </a>
                </div>
              </div>
              <div className="wehere-r">
                <div className="service-it">
                  <div className="service-it-tit">YOUTUBE</div>
                  <div className="service-it-txt">
                    мы регулярно выкладываем обзоры на гитары, которые
                    появляются в нашей лавке, приглашаем крутых музыкантов,
                    веселимся, общаемся и много играем
                  </div>
                </div>

                <div className="service-it">
                  <div className="service-it-tit">ВК</div>
                  <div className="service-it-txt">
                    если инстаграм вам наскучил или вы решили взять судьбу в
                    свои руки и уж точно не пропустить ни единой новости,
                    милости просим
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        //!
        {/* <div>karta</div> */}
        <div className="where">
          <div className="contain">
            <div className="where-w">
              <div className="where-tit">Как до нас добраться?</div>
              <div className="where-row">
                <div className="where-col-1">
                  <div className="where-it">
                    <div className="service-it-tit">Адрес</div>
                    <div className="service-it-txt">
                      г. Самара, ТЦ "Сила Спорта", Московское ш., 17, этаж 2
                    </div>
                  </div>
                  <div className="where-it">
                    <div className="service-it-tit">Остановка метро</div>
                    <div className="service-it-txt">Московская</div>
                  </div>
                </div>
                <div className="where-col-2">
                  <div className="where-it">
                    <div className="service-it-tit">
                      На общественном транспорте
                    </div>
                    <div className="service-it-txt">
                      Выходите на остановке "Метро Московская", идете по
                      Московскому шоссе 200 метров прямо (в сторону рынка
                      Караван), переходите дорогу по подземному переходу, и
                      оказываетесь прямо перед ТЦ "Сила спорта", поднимаетесь на
                      второй этаж, идете до конца коридора и первая секция
                      направо (ориентир лифты и бар кинотеатра) Вы - на месте!
                    </div>
                  </div>
                </div>
                <div className="where-col-3">
                  <div className="where-it">
                    <div className="service-it-tit">На автомобиле</div>
                    <div className="service-it-txt">
                      Если Вы едете из города, то поворачиваете на парковку ТЦ
                      "Вертикаль" (ориентир статуя коня), паркуетесь, и
                      оказываетесь прямо перед ТЦ "Вертикаль", поднимаетесь на
                      второй этаж, идете до конца коридора и первая секция
                      налево (ориентир бар кинотеатра) Вы - на месте!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
