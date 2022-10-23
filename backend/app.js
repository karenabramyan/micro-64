require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/config');

// роутеры

const itemsRouter = require('./routes/itemsRoute');
const regRouter = require('./routes/registrationRoute');
const loginRouter = require('./routes/loginRoute');
const basketRouter = require('./routes/basketRoute');

const PORT = process.env.PORT ?? 4000;
const app = express();
config(app);

// подключение роутера

app.use('/api/items', itemsRouter);
app.use('/api/registration', regRouter);
app.use('/api/auth', loginRouter);
app.use('./api/basket', basketRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
