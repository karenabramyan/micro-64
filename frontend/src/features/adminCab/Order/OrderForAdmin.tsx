import { Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../../store';
import { changeOrders } from '../adminSlice';
// import { changeOrderStatus } from '../apiAdmin';
import OrderAdminData from '../types/OrderAdminData';
import './OrderForAdmin.css';

function OrderForAdmin({ order }: { order: OrderAdminData }): JSX.Element {
  const dispatch = useAppDispatch();
  function changeOrder(orderData: { status: string, orderId: number }): void {
    dispatch(changeOrders(orderData));
  }

  return (
    <Card className="basket-item">
        <Typography className="admin-user-id">{order.id}</Typography>
        <Typography className="admin-user-phone">{order.userPhone}</Typography>
        <Typography className="admin-item-title">{order.itemTitle}</Typography>
        <Typography className="admin-order-days">{order.days}</Typography>
        <Typography className="admin-order-type">{order.type}</Typography>
        <Typography className="admin-order-price">{order.price}</Typography>
        <Typography className="admin-order-date">{order.date.slice(0, 10)}</Typography>

        <FormControl className="admin-order-status" sx={{ width: 180 }}>
        {/* <InputLabel>Статус заказа</InputLabel> */}
        <Select
          // sx={{ height: '40px' }}
          value={order.orderStatus}
          // label="Статус заказа"
          defaultValue={order.orderStatus}
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={(event: SelectChangeEvent) => changeOrder(
            { status: event.target.value, orderId: order.id })}
        >
          <MenuItem value="Заказ оформлен">Заказ оформлен</MenuItem>
          <MenuItem value="Заказ в работе">Заказ в работе</MenuItem>
          <MenuItem value="Заказ выполнен">Заказ выполнен</MenuItem>
          <MenuItem value="Заказ отменен">Заказ отменен</MenuItem>
        </Select>
        </FormControl>
    </Card>
  );
}

export default OrderForAdmin;
