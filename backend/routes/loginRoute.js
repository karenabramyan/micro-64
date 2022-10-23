const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('/user', async (req, res) => {
  const { user } = res.locals;
  if (user) {
    res.json({
      isLoggedIn: true,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        login: user.login,
        role: user.role,
      },
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userId = user.id;
    req.session.user = user;
    res.json({
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        login: user.login,
        role: user.role,
      },
    });
  } else {
    res.status(401).json({ error: 'Пользователя с такими данными не существует' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.json({ error: 'Не удалось выйти' });
      return;
    }
    res.clearCookie('user_sid');
    res.json({ message: 'success' });
  });
});

module.exports = router;
