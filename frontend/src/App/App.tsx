import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import ItemList from '../features/cards/ItemList/ItemList';
import Main from './Main';
import RentItemList from '../features/cards/ItemList/RentItemList';
import BuyItemList from '../features/cards/ItemList/BuyItemList';

function App(): JSX.Element {
  return (
    <>
      <br />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<ItemList />} />
          <Route path="/rent" element={<RentItemList />} />
          <Route path="/buy" element={<BuyItemList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
