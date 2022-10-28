import React from 'react';
import './Franchise.css';
import img1 from './img/img1.jpeg';
import img2 from './img/img2.jpeg';

function FranchisePage(): JSX.Element {
  return (
    <div className="ftanchise">
      <h2>Предлагаем Вам стать нашими партнерами</h2>
      <div className="gallery">

        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
      <div className="about">
        В 2015 году мы создали продукт и бренд, который стал №1 в сегменте
        микронаушников в Саратове. Мы даем людям легальный и доступный способ
        сдавать экзамены. Сегодня наша компания ищет новых партнеров и
        предлагает Вам стать нашим партнером, чтобы зарабатывать вместе!
        Работая с нами, Вы получите опыт не только в запуске бизнеса, но и
        опыт продаж, маркетинга, найма сотрудников.
        <div className="why">
          <h4>Почему именно с нами стоит начать бизнес?</h4>
          <div className="contact">
            7 лет успешной работы 20 моделей микронашуников 1 год гарантии на
            все устройства. Собственное производство.
            <h4>
              Свяжитесь с нами по телефону +7(917)310-21-11 или отправьте
              письмо: Micro64saratov@yandex.ru с темой :Партнерская
              программа.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FranchisePage;
