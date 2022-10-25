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
          console.log(item);
          const userFromOrder = await User.findOne({ where: { id: order.userId }, raw: true });
          console.log(userFromOrder);
          const orderForAdmin = {
            userId: userFromOrder.id,
            userPhone: userFromOrder.phone,
            itemTitle: item.title,
            days: order.days,
            orderStatus: orders.status,
          };
          order.push(orderForAdmin);
        }
      }
      console.log(orders);
      return res.json(orders);
    }
  });

module.exports = router;
