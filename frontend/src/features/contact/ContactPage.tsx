import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
const mapData = {
    center: [51.5405600, 46.0086100],
    zoom: 5,
  };

  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
  ];

function ContactPage() {
    return (
        <div>
            <h2>Контакты</h2>
            <h3>Тел: +7(917)310-21-11</h3>
            <p>Адрес: г.Саратов, Ленина, 1</p>
            <p>E-mail: admin@microstore.su</p>
            <p>Тел. для SMS: +7(917)310-21-11 </p>
            <YMaps>
            <Map defaultState={mapData}>
            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
            </Map>
            </YMaps>
        </div>
    );
}

export default ContactPage;