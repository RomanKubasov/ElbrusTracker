/* eslint-disable camelcase */
const express = require('express');
const { feedback_metrics } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    const result = await feedback_metrics.findAll();
    return res.json(JSON.parse(JSON.stringify(result)));
  });

module.exports = router;
