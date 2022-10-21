import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Main from './Main';
import RentItemList from '../features/cards/ItemList/RentItemList';
import BuyItemList from '../features/cards/ItemList/BuyItemList';
import ItemList from '../features/cards/ItemList/ItemList';
import Registration from '../features/auth/Registration';
import Login from '../features/auth/Login/Login';
import InfoList from '../features/Infopages/InfopagesList/InfoList';


function App(): JSX.Element {
  return (
    <>
      <br />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/info" element={<InfoList />} />
          <Route path="/" element={<ItemList />} />
          <Route path="/rent" element={<RentItemList />} />
          <Route path="/buy" element={<BuyItemList />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
