const router = require('express').Router();
const { Item, User, Basket } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const { user } = res.locals;
    if (user) {
      const basket = await Basket.findAll({
        where: {
          userId: user.id,
          orderStatus: true,
        },
        raw: true,
      });
      if (basket) {
        const items = basket.map(async (item) => {
          const curItem = await Item.findAll({ where: { id: item.itemId }, raw: true });
          return curItem[0];
        });
        const data = await Promise.all(items);
        return res.json(data);
      }
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
  })
  .delete(async (req, res) => {
    const { user, itemId } = req.body;
    if (user) {
      const itemForRemove = await Basket.findOne({ where: { userId: user.id, itemId } });
      if (itemForRemove) {
        await Basket.destroy({ where: { id: itemForRemove.id } });
        return res.json({ itemId, status: 'success' });
      }
      return res.json({ status: 'Товар не найден' });
    }
    return res.json({ status: 'Пожалуйста, войдите в личный кабинет для удаления из корзины товаров' });
  });

module.exports = router;
