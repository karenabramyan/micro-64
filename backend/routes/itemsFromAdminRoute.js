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
  });

module.exports = router;
