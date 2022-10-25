import { Card, Typography } from '@mui/material';
import React from 'react';
import OrderAdminData from '../types/OrderAdminData';
import './OrderForAdmin.css';

function OrderForAdmin({ order }: { order: OrderAdminData }): JSX.Element {
  return (
    <Card className="basket-item">
        <Typography className="admin-user-id">{order.userId}</Typography>
        <Typography className="admin-user-phone">{order.userPhone}</Typography>
        <Typography className="admin-item-title">{order.itemTitle}</Typography>
        <Typography className="admin-order-days">{order.days}</Typography>
        <Typography className="admin-order-type">{order.type}</Typography>
        <Typography className="admin-order-price">{order.price}</Typography>
        <Typography className="admin-order-status">{order.orderStatus}</Typography>
    </Card>
  );
}

export default OrderForAdmin;
