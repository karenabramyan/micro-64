require('@babel/register');
require('dotenv').config();
const express = require('express');
const path = require('path');
const config = require('./config/config');

// роутеры

const itemsRouter = require('./routes/itemsRoute');
const regRouter = require('./routes/registrationRoute');
const loginRouter = require('./routes/loginRoute');
const basketRouter = require('./routes/basketRoute');
const likesRouter = require('./routes/likesRoute');
const adminItemRouter = require('./routes/itemsFromAdminRoute');
const orderRouter = require('./routes/orderRoute');
const adminOrderRouter = require('./routes/orderAdmin');
const telegramRouter = require('./routes/telegramRoute');

const PORT = process.env.PORT ?? 4000;
const app = express();
config(app);

// подключение роутера

app.use('/api/items', itemsRouter);
app.use('/api/registration', regRouter);
app.use('/api/auth', loginRouter);
app.use('/api/basket', basketRouter);
app.use('/api/likes', likesRouter);
app.use('/api/admin-item', adminItemRouter);
app.use('/api/admin/orders', adminOrderRouter);
app.use('/api/order', orderRouter);
app.use('/api/telegram', telegramRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
