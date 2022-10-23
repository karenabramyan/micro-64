const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
// const fileUpload = require('express-fileupload');
const path = require('path');
const sessionConfig = require('./sessionConfig');
const getUser = require('../middlewares/getUser');

const config = (app) => {
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }, { limit: '100mb' }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../../frontend/build')));
  app.use(getUser);
};

module.exports = config;
