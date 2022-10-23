const router = require('express').Router();
const { Item, User, Basket } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const { user } = res.locals;
    const basket = await Basket.findAll({
      where: {
        userId: user.id,
        orderStatus: true,
      },
      raw: true,
    });
    if (user) {
      const items = basket.map(async (item) => {
        const curItem = await Item.findAll({ where: { id: item.itemId }, raw: true });
        return curItem[0];
      });
      const data = await Promise.all(items);
      return res.json(data);
    }
    const data = [];
    return res.json(data);
  })
  .post(async (req, res) => {
    const { user, itemId } = req.body;
    if (user) {
      const item = await Item.findOne({ where: { id: Number(itemId) } });
      const currentUser = await User.findOne({ where: { id: Number(user.id) } });
      await Basket.create({
        itemId: item.id,
        userId: currentUser.id,
        orderStatus: true,
      });
      return res.json({ item, status: 'success' });
    }
    return res.json({ status: 'Для оформления заказа необходимо зарегистрироваться' });
  });

module.exports = router;
