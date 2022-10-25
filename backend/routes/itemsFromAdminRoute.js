/* eslint-disable max-len */
const router = require('express').Router();
const { Item } = require('../db/models');

router
  .route('/')
  .post(async (req, res) => {
    const data = req.body;
    console.log(data);
    const items = await Item.create({
      title: data.title,
      category: data.category,
      price: data.price,
      description: data.description,
      type: data.type,
      capacity: data.capacity,
      range: data.range,
      img: data.img,
      amount: data.amount,
    });
    res.json(items);
  })
  // eslint-disable-next-line consistent-return
  .delete(async (req, res) => {
    const { itemId } = req.body;
    const adminItemForRemove = await Item.findOne({ where: { id: itemId } });
    if (adminItemForRemove) {
      console.log(adminItemForRemove)
      await Item.destroy({ where: { id: adminItemForRemove.id } });
      return res.json({ itemId });
    }
  });

module.exports = router;
