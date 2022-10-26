/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
const router = require('express').Router();
const { Item, User, Order } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const { user } = res.locals;
    // добавить условие, что юзер - админ
    if (user) {
      const ordersData = await Order.findAll({ raw: true });
      const orders = [];
      if (ordersData) {
        for (const order of ordersData) {
          const item = await Item.findOne({ where: { id: order.itemId }, raw: true });
          const userFromOrder = await User.findOne({ where: { id: order.userId }, raw: true });
          const orderForAdmin = {
            id: order.id,
            userPhone: userFromOrder.phone,
            itemTitle: item.title,
            type: item.type,
            days: order.days,
            date: order.updatedAt,
            price: item.price,
            orderStatus: order.status,
          };
          orders.push(orderForAdmin);
        }
      }
      return res.json(orders);
    }
  })
  .put(async (req, res) => {
    const { status, orderId } = req.body;
    const currentOrder = await Order.findOne({ where: { id: orderId } });
    if (currentOrder) {
      currentOrder.status = status;
      await currentOrder.save();
      return res.json({ status: currentOrder.status, orderId: currentOrder.id });
    }
    return res.json({ status, error: 'Не удалось изменить статус заказа' });
  });

module.exports = router;
