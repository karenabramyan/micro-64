import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Main from './Main';
import RentItemList from '../features/cards/ItemList/RentItemList';
import BuyItemList from '../features/cards/ItemList/BuyItemList';
import ItemList from '../features/cards/ItemList/ItemList';
import Register from '../features/auth/Registration';
import Registration from '../features/auth/Registration';

function App(): JSX.Element {
  return (
    <>
      <br />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<ItemList />} />
          <Route path="/rent" element={<RentItemList />} />
          <Route path="/buy" element={<BuyItemList />} />
          <Route path="/register" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
