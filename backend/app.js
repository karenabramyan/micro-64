require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/config');

// роутеры

const itemsRouter = require('./routes/itemsRoute');

const PORT = process.env.PORT ?? 4000;
const app = express();
config(app);

// подключение роутера

app.use('/api/items', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
