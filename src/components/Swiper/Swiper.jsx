import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "./swiper.css";

import "./swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation>
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
    </Swiper>
  );
};
