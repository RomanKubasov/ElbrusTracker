/* eslint-disable camelcase */
const router = require('express').Router();
const {
  progresses, users, progress_items, progress_indicators,
} = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const {
      mood, sleep, performance, git_login,
    } = req.body;

    const user_id = users.findOne({ where: { login: git_login } });
    if (user_id) {
      if (mood && sleep && performance) {
        const newProgress = await progresses.create({
          date: new Date(),
          user_id,
        });
        if (newProgress) {
          const newProgressId = newProgress.id;
          const moodInd = await progress_indicators.findOne({ where: { indicator: 'mood' } });
          const sleepInd = await progress_indicators.findOne({ where: { indicator: 'sleep' } });
          const performanceInd = await progress_indicators.findOne({ where: { indicator: 'performance' } });

          const arrProgressItems = [
            { progress_id: newProgressId, indicator_id: moodInd.id, value: mood },
            { progress_id: newProgressId, indicator_id: sleepInd.id, value: sleep },
            { progress_id: newProgressId, indicator_id: performanceInd.id, value: performance },
          ];

          const
          // [{indicator:mood,id:1},{indicator:sleep,id:2}]
          // const moodObj = indicators.findIndex((el)=>el.indicator === 'mood');
          // const moodId = moodObj.id;
          // const arrProgressItems = [];
          // for (i=0,i<3,i+=1){

          // }
        }
      }
    } else {
      return res.json(400);
    }
  });

module.exports = router;
