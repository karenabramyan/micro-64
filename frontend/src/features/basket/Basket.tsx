import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import BasketItem from './BasketItem/BasketItem';
import { loadBasket } from './basketSlice';
import { selectBasket, selectTotalItems } from './selectBasket';
import ItemInBasket from './types/ItemInBasket';

function Basket(): JSX.Element {
  const basketItems = useSelector(selectBasket);
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  function cutPrice(price: number): string | number {
    const text = price.toString();
    if (text.length > 3) {
      const secondPart = text.slice(-3);
      const firstPart = text.slice(0, text.length - 3);
      return `${firstPart} ${secondPart} `;
    }
    return `${text} `;
  }

  useEffect(() => {
    dispatch(loadBasket());
  }, []);
  console.log(totalItems)

  useEffect(() => {
    const total = basketItems
      .map((item) => item.price)
      .reduce(((totally, itemPrice) => totally + Number(itemPrice)), 0);
    setTotalPrice(total);
  }, [basketItems]);


  return (
    <div>
        <Typography variant="h5">Корзина</Typography>
        <br />
        {totalItems.map((item: ItemInBasket) => <BasketItem item={item} />)}
        <br />
        <Typography variant="h6">{`Общая стоимость: ${cutPrice(totalPrice)} руб.`}</Typography>
        <br />
    </div>
  );
}

export default Basket;
