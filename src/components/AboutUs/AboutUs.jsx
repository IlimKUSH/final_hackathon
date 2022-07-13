import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="us">
        <h1>Мы</h1>
      </div>
      <div className="liniya">
        <hr />
      </div>
      <div className="parent-img">
        <div className="child-img1">
          <div className="text1">
            <h2>Всевлод</h2>
            <span>
              Главный поборник прав и морали, знаком с певицей гречкой. В
              совершенстве владеет китайским коммерческим, китайским матерным.
              При необходимости с помощью телефона может организовать встречу с
              Трампом, Папой Римским и Джоном Леноном.
            </span>
          </div>
          <h2 className="names">Всевлод</h2>
        </div>
        <div className="child-img2">
          <div className="text2">
            <h2>Валерий Дядя Валера</h2>
            <span>
              Скоростной ремонт помещений за 7 минут: дизайн, разработка и
              воплощение. Расставляет по местам гитары и людей.
            </span>
          </div>
          <h2 className="names">Валерий Дядя Валера</h2>
        </div>
        <div className="child-img3">
          <div className="text3">
            <h2>Алексей Дьяков Гитар Гитарыч</h2>
            <span>
              Алексей Алексеевич, получил звание Гитар Гитарыч от своих
              учеников. Обычный человек состоит на 80% из воды, а Алексей из
              шуток, анекдотов и филологических афоризмов.
            </span>
          </div>
          <h2 className="names">Алексей Дьяков Гитар Гитарыч</h2>
        </div>
      </div>
      <div className="parent-img-2">
        <div className="child-img4">
          <div className="text4">
            <h2>Алексей Андреев</h2>
            <span>
              Знаком с Лениным, Александром Македонским, Вещим Олегом ибо имеет
              диплом учителя истории. Быстро понял, что гитары лучше, чем дети.
              На данный момент готовит к сдаче свою 74-ю мастеровую гитару.
            </span>
          </div>
          <h2 className="names">Алексей Андреев</h2>
        </div>
        <div className="child-img5">
          <div className="text5">
            <h2>Макс</h2>
            <span>
              Заведует маркетингом. Уже 3-й раз приносит свой телекастер на
              продажу, но постоянно уносит обратно.
            </span>
          </div>
          <h2 className="names">Макс</h2>
        </div>
        <div className="child-img6">
          <div className="text6">
            <h2>Андрей</h2>
            <span>
              Поглощает оливки, пьет из амфоры. С помощью дендро-фекальной
              методики собирает гитару из любых подручных материалов.
            </span>
          </div>
          <h2 className="names">Андрей</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
