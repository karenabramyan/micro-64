const router = require('express').Router();
const { Item } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const items = await Item.findAll({ raw: true });
    res.json(items);
  });

module.exports = router;
