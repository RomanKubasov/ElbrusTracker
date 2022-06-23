const router = require('express').Router();

const { users, groups } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    console.log(req.body);
    // const {group,count} = req.body;
    // allStudents = await groups
    res.sendStatus(200);
  });

module.exports = router;
