import React from "react";
import HeaderDown from "../Header/HeaderDown";
import "./about.css";

//! IMAGES
import Vsevlod from "../../images/vsevlod.png";
import Valera from "../../images/valera.png";
import Gitar from "../../images/gitar.png";
import Aleksey from "../../images/aleksey.png";
import Maks from "../../images/maks.png";
import Andrey from "../../images/andrey.png";
import Vk from "../../images/vkontakte.svg";
import YouTube from "../../images/youtub.svg";
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
              <a href="javascript:void(0);" className="we-it">
                <div className="we-img-w">
                  <img src={Vsevlod} className="we-img" />
                  <div className="we-img-ab-act">
                    <div className="we-img-ab-act-txt-1">Всеволод </div>
                    <div className="we-img-ab-act-txt-2">
                      <p>
                        <span>
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
                <div className="we-txt">Всеволод</div>
              </a>

              <a href="javascript:void(0);" className="we-it">
                <div className="we-img-w">
                  <img src={Valera} className="we-img" />
                  <div className="we-img-ab-act">
                    <div className="we-img-ab-act-txt-1">Валерий </div>
                    <div className="we-img-ab-act-txt-2">
                      <p>
                        <span>
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

              <a href="javascript:void(0);" className="we-it">
                <div class="we-img-w">
                  <img src={Gitar} className="we-img" />
                  <div className="we-img-ab-act">
                    <div clasNames="we-img-ab-act-txt-1">Андрей Симаков </div>
                    <div className="we-img-ab-act-txt-2">
                      <p>
                        <span>
                          Поглощает оливки, пьет из амфоры. С помощью
                          дендро-фекальной методики собирает гитару из любых
                          подручных материалов.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Андрей Симаков</div>
              </a>

              <a href="javascript:void(0);" className="we-it">
                <div class="we-img-w">
                  <img src={Aleksey} className="we-img" />
                  <div className="we-img-ab-act">
                    <div className="we-img-ab-act-txt-1">Алексей Андреев </div>
                    <div className="we-img-ab-act-txt-2">
                      <p>
                        <span>
                          Знаком с Лениным, Александром Македонским, Вещим
                          Олегом ибо имеет диплом учителя истории. Быстро понял,
                          что гитары лучше, чем дети. На данный момент готовит к
                          сдаче свою 74-ю мастеровую гитару.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Алексей Андреев</div>
              </a>

              <a href="javascript:void(0);" className="we-it">
                <div className="we-img-w">
                  <img src={Maks} className="we-img" />
                  <div className="we-img-ab-act">
                    <div className="we-img-ab-act-txt-1">Алексей Дьяков </div>
                    <div className="we-img-ab-act-txt-2">
                      <p>
                        <span>
                          Алексей Алексеевич, получил звание Гитар Гитарыч от
                          своих учеников. Обычный человек состоит на 80% из
                          воды, а Алексей из шуток, анекдотов и филологических
                          афоризмов.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="we-txt">Алексей Дьяков</div>
              </a>

              <a href="javascript:void(0);" className="we-it">
                <div class="we-img-w">
                  <img src={Andrey} className="we-img" />
                  <div className="we-img-ab-act">
                    <div className="we-img-ab-act-txt-1">Макс </div>
                    <div className="we-img-ab-act-txt-2">
                      <p>
                        <span>
                          Заведует маркетингом. Уже 3-й раз приносит свой
                          телекастер на продажу, но постоянно уносит обратно.
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
        //!2
        <div className="wehere">
          <div className="contain">
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
        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          <SwiperSlide className="slide">
            <div className="main__slide">
              <h2>Takamine</h2>
              <p>гитара</p>
              <p>винтажная 12-струнная GJ72CE-12BSB</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-2 slide">
            <div className="main__slide">
              <h2>Видео звонок в магазин</h2>
              <p>
                Эта фунция помогает увидеть и услышать инструмент в реальном
                времени, что заметно упрощает выбор
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-3 slide">
            <div className="main__slide">
              <h2>Отстройка каждого инструмента</h2>
              <p>Наши мастера отстраивают каждый инструмент перед отправкой</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-4 slide">
            <div className="main__slide">
              <h2>Kepma G1</h2>
              <p>Акустическая гитара </p>
              <p>Инструмент из премиальной линейки G1</p>
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </>
  );
};

export default About;
