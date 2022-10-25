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
  });

module.exports = router;
