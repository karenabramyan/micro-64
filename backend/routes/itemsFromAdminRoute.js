/* eslint-disable max-len */
const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const { Item } = require('../db/models');

const imagePath = path.join(process.env.PWD, 'public/images');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagePath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router
  .route('/')
  .post(upload.array('image'), async (req, res) => {
    const data = req.body;
    const image = req.files.map((el) => (el.originalname));
    const imgStr = `./images/${image}`;
    const items = await Item.create({
      title: data.title,
      category: data.category,
      price: data.price,
      description: data.description,
      type: data.type,
      capacity: data.capacity,
      range: data.range,
      img: imgStr,
      amount: data.amount,
    });
    res.json(items);
  })
  // eslint-disable-next-line consistent-return
  .delete(async (req, res) => {
    const { itemId } = req.body;
    const adminItemForRemove = await Item.findOne({ where: { id: itemId } });
    if (adminItemForRemove) {
      await Item.destroy({ where: { id: adminItemForRemove.id } });
      return res.json({ itemId });
    }
  })
  .put(async (req, res) => {
    try {
      const { itemId, amount, price } = req.body;
      const adminItemForChange = await Item.findOne({ where: { id: itemId } });
      if (adminItemForChange) {
        adminItemForChange.amount = amount;
        adminItemForChange.price = price;
        await adminItemForChange.save();
        return res.json({ itemId, amount, price });
      }
      return res.json({ error: 'Не удалось изменить товар', amount, price });
    } catch (err) {
      return res.json({ error: err.message });
    }
  });

module.exports = router;
