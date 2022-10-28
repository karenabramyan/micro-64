import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import BasketItem from './BasketItem/BasketItem';
import { loadBasket, makeOrderBasket } from './basketSlice';
import { selectBasket, selectTotalItems } from './selectBasket';
import ItemInBasket from './types/ItemInBasket';
import ModalWindowOrder from './ModaWindowOrder';
import { selectUser } from '../auth/selectors';
import sendApplication from './telegramApi';

function Basket(): JSX.Element {
  const navigate = useNavigate();
  const selectUs = useSelector(selectUser);

  const [open, setOpen] = React.useState(false);

  const basketItems = useSelector(selectBasket);
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => {
    navigate('/');
    setOpen(false);
  };

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const total = basketItems
      .map((item) => {
        if (Number(item.days) === 0 || item.days === '-') {
          return Number(item.price);
        }
        return Number(item.price) * Number(item.days);
      })
      .reduce(((totally, itemPrice) => totally + Number(itemPrice)), 0);
    setTotalPrice(total);
  }, [basketItems]);

  function makeOrder(items: any): void {
    dispatch(makeOrderBasket(items)).then(() => dispatch(loadBasket()));
    // eslint-disable-next-line no-restricted-syntax
    for (const item of items) {
      sendApplication(selectUs, item);
    }
    // sendApplication(selectUs, items[0]);
    handleOpen();
  }

  return (
    <div className="basket-container">
      <Typography className="center-text" variant="h5">Корзина</Typography>
      <br />
      {(totalItems.length > 0) ?
        (
          <div>
            {totalItems.map((item: ItemInBasket) => <BasketItem item={item} key={item.id} />)}
            <br />
            <Typography variant="h6" className="center-text">{`Общая стоимость: ${cutPrice(totalPrice)} руб.`}</Typography>
            <br />
            <div className="basket-item-container">
            <Button size="large" color="error" variant="outlined" className="center-text" onClick={() => makeOrder(basketItems)}>Оформить заказ</Button>
            </div>
            <br />
            <br />

          </div>
        )
        : (<Typography variant="h6" className="center-text">Вы пока ничего не добавили в корзину!</Typography>)}
      <ModalWindowOrder open={open} handleClose={handleClose} />
    </div>
  );
}

export default Basket;
