import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import BasketItem from './BasketItem/BasketItem';
import { loadBasket } from './basketSlice';
import { selectBasket } from './selectBasket';

function Basket(): JSX.Element {
  const basketItems = useSelector(selectBasket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBasket());
  }, [dispatch]);

  return (
    <div>
        <Typography variant="h5">Корзина</Typography>
        <br />
        {basketItems.map((item) => <BasketItem item={item} />)}
    </div>
  );
}

export default Basket;
