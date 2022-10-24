/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const router = require('express').Router();
const { Order, Basket } = require('../db/models');

router
  .route('/')
  .post(async (req, res) => {
    const { user } = res.locals;
    const orderData = req.body;
    if (user && orderData) {
      for (const order of orderData) {
        const basket = await Basket.findOne({
          where: {
            userId: user.id,
            itemId: order.id,
            days: order.days,
          },
          raw: true,
        });

        await Basket.destroy({
          where: {
            id: basket.id,
          },
        });
        await Order.create({
          userId: user.id,
          itemId: order.id,
          days: order.days,
          status: 'Заказ оформлен',
        });
      }
    }
    return res.json({ status: 'Success' });
  });

module.exports = router;
