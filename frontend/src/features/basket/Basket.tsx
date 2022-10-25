import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import BasketItem from './BasketItem/BasketItem';
import { loadBasket, makeOrderBasket } from './basketSlice';
import { selectBasket, selectTotalItems } from './selectBasket';
import ItemInBasket from './types/ItemInBasket';
import * as api from './apiBasket';
import ModalWindowOrder from './ModaWindowOrder';

function Basket(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const basketItems = useSelector(selectBasket);
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState(0);


  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

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

  useEffect(() => {
    const total = basketItems
      .map((item) => item.price)
      .reduce(((totally, itemPrice) => totally + Number(itemPrice)), 0);
    setTotalPrice(total);
  }, [basketItems]);

  function makeOrder(items: any): void {
    dispatch(makeOrderBasket(items)).then(() => dispatch(loadBasket()));
    handleOpen();
  }

  return (
    <div>
        <Typography variant="h5">Корзина</Typography>
        <br />
        {(totalItems.length > 0) ?
         (
<div>
          {totalItems.map((item: ItemInBasket) => <BasketItem item={item} key={item.id} />)}
          <br />
          <Typography variant="h6">{`Общая стоимость: ${cutPrice(totalPrice)} руб.`}</Typography>
          <br />
          <Button size="large" color="inherit" variant="outlined" onClick={() => makeOrder(basketItems)}>Оформить заказ</Button>
          <br />
          <br />

</div>
)
          : (<Typography variant="h6">Вы пока ничего не добавили в корзину!</Typography>)}
    <ModalWindowOrder open={open} handleClose={handleClose} />
    </div>
  );
}

export default Basket;
