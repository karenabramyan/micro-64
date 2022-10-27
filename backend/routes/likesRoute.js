const router = require('express').Router();
const { Like, User, Item } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const { user } = res.locals;
    const likes = await Like.findAll({ where: { userId: user?.id }, raw: true });
    if (likes) {
      const items = likes.map(async (item) => {
        const curItem = await Item.findAll({
          where: { id: item.itemId },
          raw: true,
        });
        return curItem[0];
      });
      const data = await Promise.all(items);
      return res.json(data);
    }
  })
  .post(async (req, res) => {
    const { userId, itemId } = req.body;
    // console.log(req.body);
    const us = await User.findOne({ where: { id: Number(userId) } });
    if (us) {
      const it = await Item.findOne({ where: { id: Number(itemId) } });
      const likeOne = await Like.findOne({
        where: {
          userId: Number(userId),
          itemId: Number(itemId),
        },
      });
      if (likeOne) {
        await Like.destroy({
          where: {
            userId: Number(userId),
            itemId: Number(itemId),
          },
        });
        return res.json({ status: 'destroy', itemId });
      }
      const like = await Like.create({
        itemId: it.id,
        userId: us.id,
        // like: true
      });
      return res.json({ like });
      // return res.json({ status: 'err' });
    }
  });
// .delete(async (req, res) => {
//   const { user, itemId } = req.body;
//   console.log(req.body);
//   if (user) {
//     const remLike = await Like.findOne({ where: { userId: user.id, itemId } });
//     if (remLike) {
//       await Like.destroy({ where: { id: remLike.id } });
//       return res.json({ itemId });
//     }
//   }
// });

module.exports = router;
