const router = require('express').Router();
const { Item, User } = require('../db/models');

router
  .route('/')
  .post(async (req, res) => {
    const { user, itemId } = req.body;
    const item = await Item.findOne({ where: { id: itemId } });
    const currentUser = await User.findOne({ where: { id: user.id } });
    // const basket = await Basket.create({where: })
    res.json();
  });

module.exports = router;
