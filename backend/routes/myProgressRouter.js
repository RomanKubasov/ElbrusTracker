/* eslint-disable camelcase */
const router = require('express').Router();
const {
  progresses, progress_items, progress_indicators,
} = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { id } = req.body;

    let userProgress = await progresses.findAll(
      {
        where: { user_id: id },
        attributes: ['date'],
        include: {
          model: progress_items,
          attributes: ['value'],
          include: {
            model: progress_indicators,
            attributes: ['indicator'],
          },
        },
      },
    );
    userProgress = JSON.parse(JSON.stringify(userProgress));

    const newUserProgress = userProgress.map((el) => ({
      date: el.date.substring(5, 10),
      mood: el.progress_items.filter((el2) => el2.progress_indicator.indicator === 'mood')[0].value,
      sleep: el.progress_items.filter((el2) => el2.progress_indicator.indicator === 'sleep')[0].value,
      performance: el.progress_items.filter((el2) => el2.progress_indicator.indicator === 'performance')[0].value,
    }));

    res.json(newUserProgress);
  });

module.exports = router;
