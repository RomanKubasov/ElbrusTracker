const router = require('express').Router();
const bycrypt = require('bcrypt');
const { users } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    res.json({});
  });

router.route('/login')
  .post(async (req, res) => {
    const { login, pass } = req.body;
    if (login && pass) {
      const user = await users.findOne({ where: { login } });
      if (user) { // && await bycrypt.compare(pass, user.pass)) {
        req.session.user = { login: user.login, id: user.id };
        return res.json({ login: user.login, id: user.id });
      }
      return res.sendStatus(401);
    }
    return res.sendStatus(401);
  });

router.route('/check')
  .post((req, res) => {
    if (req.session.user) {
      return res.json(req.session.user);
    }
    return res.sendStatus(401);
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

module.exports = router;
