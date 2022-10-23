import { Typography } from '@mui/material';
import React from 'react';
import BasketItem from './BasketItem';

function Basket(): JSX.Element {
  return (
    <div>
        <Typography variant="h5">Корзина</Typography>
        <br />
        <BasketItem />
    </div>
  );
}

export default Basket;
