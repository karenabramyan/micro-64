const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

loginRouter.get('/', async (req, res) => {
  const { user } = res.locals;
  if (user) {
    res.json({
      isLoggedIn: true,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

loginRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const exsistingUser = await User.findOne({ where: { email } });
  if (exsistingUser && (await bcrypt.compare(password, exsistingUser.password))) {
    req.session.userId = exsistingUser.id;
    req.session.user = exsistingUser;
    res.json({ id: exsistingUser.id, email: exsistingUser.email });
  } else {
    res.status(401).json({ error: 'Такого пользователя нет либо пароли не совпадают' });
  }
});

loginRouter.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

module.exports = loginRouter;
