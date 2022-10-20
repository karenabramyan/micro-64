require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const PORT = process.env.PORT ?? 4000;
const app = express();
config(app);


app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
