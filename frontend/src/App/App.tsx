import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import RentItemList from '../features/cards/ItemList/RentItemList';
import BuyItemList from '../features/cards/ItemList/BuyItemList';
import ItemList from '../features/cards/ItemList/ItemList';
import Registration from '../features/auth/Registration';
import Login from '../features/auth/Login/Login';
import { useAppDispatch } from '../store';
import { getUser } from '../features/auth/authSlice';
import Basket from '../features/basket/Basket';
import InfoList from '../features/Infopages/InfopagesList/InfoList';
import Like from '../features/favorites/likes/Like';
import InfoPage from '../features/Infopages/InfopagesList/InfoPage';
import AdminCab from '../features/adminCab/AdminCab';
import ContactPage from '../features/contact/ContactPage';
import AdminOrders from '../features/adminCab/AdminOrders';
import Carousel from '../features/slider/Slider';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (

    <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/info" element={<InfoList />} />
          <Route path="/" element={<Carousel />} />
          <Route path="/rent" element={<RentItemList />} />
          <Route path="/buy" element={<BuyItemList />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/like" element={<Like />} />
          <Route path="/info/infopage/:id" element={<InfoPage />} />
          <Route path="/admincab" element={<AdminCab />} />
          <Route path="/adminorders" element={<AdminOrders />} />
          <Route path="/contacts" element={<ContactPage />} />
          

        </Route>
    </Routes>
  );
}

export default App;
