const router = require('express').Router();

const { users } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
  });

module.exports = router;
