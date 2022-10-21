const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .post(async (req, res) => {
    try {
      const {
        login, email, phone, password,
      } = req.body;

      const existingUser = await User.findOne({ where: { email } });
      // проверяем есть ли уже такой пользователь в БД
      if (existingUser) {
        res.status(422).json({ error: 'Такой пользователь уже существует' });
        return;
      }
      if (password.length < 8) {
        res.json({ error: 'Длина пароля должна быть не меньше 8 символов!' });
        return;
      }

      // создаём нового пользователя
      const user = await User.create({
        login,
        email,
        phone,
        role: 'User',
        // хэшируем пароль, чтобы не хранить в открытом виде в БД
        password: await bcrypt.hash(password, 10),
      });

      // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
      req.session.userId = user.id;
      res.json({ user: User });
    } catch (err) {
      res.json({ error: `${err.message}` });
    }
  });
