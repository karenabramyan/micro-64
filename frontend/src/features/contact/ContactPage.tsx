import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './contact.css';

const mapData = {
  center: [51.5405600, 46.0086100],
  zoom: 9,
};

const coordinates = [
  [51.531271, 46.021474],
  // [57.684758, 39.738521]
];

function ContactPage(): JSX.Element {
  return (
    <div className="contactCont">
      <h2>Контакты</h2>
      <h3>Тел: +7(917)310-21-11</h3>
      <p>Адрес: улица Сакко и Ванцетти, 62, г.Саратов</p>
      <p>E-mail: Micro64saratov@yandex.ru</p>
      <p>Телефон для связи: +7(917)310-21-11 </p>
      <YMaps className='mapCont'>
        <Map defaultState={mapData}>
          {coordinates.map((coordinate) => <Placemark geometry={coordinate} />)}
        </Map>
      </YMaps>
    </div>
  );
}

export default ContactPage;
