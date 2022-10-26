import { Card, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loadOrders } from './adminSlice';
import OrderForAdmin from './Order/OrderForAdmin';
// import { useSelector } from 'react-redux';

function AdminOrders(): JSX.Element {
    const dispatch = useAppDispatch();

    const orders = useSelector((state: RootState) => state.orders.orders);

    useEffect(() => {
        dispatch(loadOrders());
      }, [dispatch]);

  return (
    <div className="container-orders">
        <Typography variant="h5">Заказы клиентов</Typography>
        <br />
        <Card className="basket-item">
          <Typography className="admin-user-id" variant="h6">ID</Typography>
          <Typography className="admin-user-phone" variant="h6">Телефон</Typography>
          <Typography className="admin-item-title" variant="h6">Название товара</Typography>
          <Typography className="admin-order-days" variant="h6">Дни</Typography>
          <Typography className="admin-order-type" variant="h6">Тип заказа</Typography>
          <Typography className="admin-order-price" variant="h6">Цена</Typography>
          <Typography className="admin-order-date" variant="h6">Дата</Typography>
          <Typography className="admin-order-status" variant="h6">Статус заказа</Typography>
        </Card>
    {orders.map((order) => <OrderForAdmin order={order} key={order.itemTitle} />)}
    </div>
  );
}

export default AdminOrders;
