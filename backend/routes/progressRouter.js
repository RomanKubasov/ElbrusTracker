/* eslint-disable camelcase */
const router = require('express').Router();
const {
  progresses, progress_items, progress_indicators,
} = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const {
      mood, sleep, performance, user_id,
    } = req.body;
    // const user = await users.findOne({ where: { login: git_login } });

    if (user_id) {
      const newProgress = await progresses.create({
        date: new Date(),
        user_id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      if (newProgress) {
        const newProgressId = newProgress.id;
        const moodInd = await progress_indicators.findOne({ where: { indicator: 'mood' } });
        const sleepInd = await progress_indicators.findOne({ where: { indicator: 'sleep' } });
        const performanceInd = await progress_indicators.findOne({ where: { indicator: 'performance' } });
        if (moodInd && sleepInd && performanceInd) {
          const arrProgressItems = [
            {
              progress_id: newProgressId,
              indicator_id: moodInd.id,
              value: String(mood),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              progress_id: newProgressId,
              indicator_id: sleepInd.id,
              value: String(sleep),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              progress_id: newProgressId,
              indicator_id: performanceInd.id,
              value: String(performance),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ];
          const progressItemsResult = await progress_items.bulkCreate(arrProgressItems);
          if (progressItemsResult) { return res.sendStatus(200); } return res.sendStatus(403);
        } return res.sendStatus(402);
      } return res.sendStatus(401);
    }
    return res.sendStatus(400);
  });

module.exports = router;
