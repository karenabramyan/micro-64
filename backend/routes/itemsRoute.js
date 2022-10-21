const router = require('express').Router();

router
  .route('/')
  .get((req, res) => {
    const items = [{
      id: 1,
      title: 'Проводной наушник',
      category: 'Проводные',
      img: './micro-1.jpeg',
      type: 'Аренда',
      price: '800',
    },
    {
      id: 2,
      title: 'Ручка',
      category: 'Беспроводные',
      img: './micro-2.jpeg',
      type: 'Покупка',
      price: '3000',
    }];
    res.json(items);
  });

module.exports = router;
