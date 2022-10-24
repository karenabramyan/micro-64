const router = require('express').Router();
const { Like, User, Item } = require('../db/models');

router.route('/').get(async (req, res) => {
  const { user } = res.locals;
  const likes = await Like.findAll({ where: { userId: user.id }, raw: true });
  if (likes) {
    const items = likes.map(async (item) => {
      const curItem = await Item.findAll({ where: { id: item.itemId }, raw: true });
      return curItem[0];
    });
    const data = await Promise.all(items);
    return res.json(data);
  }
});

router.post(async (req, res) => {
  const { userId, itemId } = req.body;
  const us = await User.findOne({ where: { id: Number(userId) } });
  if (us) {
    const it = await Item.findOne({ where: { id: Number(itemId) } });
    const like = await Like.create({
      itemId: it.id,
      userId: us.id,
      // like: true
    });
    return res.json({ like });
  }
  return res.json({status: 'err' });
});

module.exports = router;
