import React from "react";
import HeaderDown from "../Header/HeaderDown";
import "./about.css";
import { Swiper, SwiperSlide } from "swiper/react";

//! IMAGES
import Vsevlod from "../../images/vsevlod.jpeg";
import Valera from "../../images/valera.png";
import Gitar from "../../images/gitar.png";
import Aleksey from "../../images/aleksey.png";
import Maks from "../../images/maks.png";
import Andrey from "../../images/andrey.png";
import Vk from "../../images/vkontakte.svg";
import YouTube from "../../images/youtub.svg";
import ShopIn from "../../images/shop-in.png";
import ShopOut from "../../images/shop-out.png";
import ShopLeft from "../../images/shop-left.png";

import { A11y, Navigation, Pagination } from "swiper";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
//! IMAGES

// import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <HeaderDown />
      </>
      <div className="we">
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
            <p>About us</p>
          </div>
          <h2 style={{ textAlign: "center", fontSize: "36px", color: "white" }}>
            Мы
          </h2>
          <div className="we-w">
            <div className="we-it-w">
              <div className="we-it">
                {/* <a href="#" className="we-it"> */}

                <div className="we-img-w">
                  <img
                    src={Vsevlod}
                    className="we-img"
                    style={{
                      width: "300px",
                      height: "400px",
                    }}
                  />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">Эрмек </div>
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
                <div className="we-txt">Эрмек</div>
              </div>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img src={Valera} className="we-img" />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">
                        Валерий Дядя Валера{" "}
                      </div>
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
                <div className="we-txt">Валерий</div>
              </a>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img src={Andrey} className="we-img" />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">Андрей </div>
                      <p>
                        <span className="block-text">
                          Алексей Алексеевич, получил звание Гитар Гитарыч от
                          своих учеников. Обычный человек состоит на 80% из
                          воды, а Алексей из шуток, анекдотов и филологических
                          афоризмов.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Андрей</div>
              </a>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img src={Aleksey} className="we-img" />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">
                        Алексей Андреев{" "}
                      </div>
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
                <div className="we-txt">Алексей</div>
              </a>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img src={Gitar} className="we-img" />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">
                        Алексей Дьяков Гитар Гитарыч
                      </div>
                      <p>
                        <span className="block-text">
                          Заведует маркетингом. Уже 3-й раз приносит свой
                          телекастер на продажу, но постоянно уносит обратно.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Алексей</div>
              </a>

              <a href="#" className="we-it">
                <div className="we-img-w">
                  <img src={Maks} className="we-img" />
                  <div className="block">
                    <div className="block-child">
                      <div className="we-img-ab-act-txt-1">Макс </div>
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
                <div className="we-txt">Макс </div>
              </a>
            </div>
          </div>
        </div>
        <div className="wehere">
          <div className="contain_2">
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
        <Container>
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "36px",
              marginTop: "40px",
            }}>
            Как мы выглядим со стороны
          </p>
          <Swiper
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "40px",
            }}
            className="swiper__wrapper-2"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation>
            <SwiperSlide>
              <div className="famous__card">
                <img src={ShopIn} alt="ukulele" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="famous__card">
                <img src={ShopOut} alt="ukulele" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="famous__card">
                <img src={ShopLeft} alt="ukulele" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="famous__card">
                <img src={ShopIn} alt="ukulele" />
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default About;
