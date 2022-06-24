/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
const router = require('express').Router();
const {
  progresses, progress_items, progress_indicators, groups, users, students,
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
    let averageSleep = newUserProgress
      .map((el) => Number(el.sleep))
      .reduce((sum, current) => sum + current, 0);
    // console.log('--------------averageSleep', averageSleep);
    // console.log('--------------newUserProgress', newUserProgress);
    averageSleep = Math.round(averageSleep / newUserProgress.length);
    // console.log('--------------newUserProgress', newUserProgress);
    let averageProgress = newUserProgress
      .map((el) => Number(el.performance))
      .reduce((el1, el2) => el1 + el2, 0);
    // console.log('--------------averageProgress', averageProgress);
    averageProgress = Math.round(averageProgress / newUserProgress.length);
    let currentUser = await students.findOne({ where: { user_id: id } });
    currentUser = JSON.parse(JSON.stringify(currentUser));
    const groupId = currentUser.group_id;
    let studentsIdFromGroup = await students.findAll({ where: { group_id: groupId } });
    studentsIdFromGroup = JSON.parse(JSON.stringify(studentsIdFromGroup));
    studentsIdFromGroup = studentsIdFromGroup.map((el) => Number(el.user_id));
    // console.log('--------------studentsIdFromGroup', studentsIdFromGroup);
    let allProgresses = await progresses.findAll();
    allProgresses = JSON.parse(JSON.stringify(allProgresses));
    const allProgressesOfUsers = allProgresses
      .filter((el) => studentsIdFromGroup.includes(el.user_id))
      .map((el) => el.id);
    // console.log(allProgressesOfUsers);
    let progressItems = await progress_items.findAll();
    progressItems = JSON.parse(JSON.stringify(progressItems));
    const progressItemsOfGroup = progressItems
      .filter((el) => allProgressesOfUsers.includes(el.progress_id) && el.indicator_id === 3)
      .map((el) => Number(el.value))
      .reduce((el1, el2) => el1 + el2, 0);
    let averageGroupProgress = Math.round(progressItemsOfGroup / allProgressesOfUsers.length);
    let SleepMessage = '';
    let ProgressMessage = '';
    if (averageSleep < 7) { SleepMessage = 'Вы слишком мало спите!'; }
    if (averageProgress > averageGroupProgress) { ProgressMessage = 'Ваш прогресс выше среднего по группе! Молодец!'; }
    if (averageProgress < averageGroupProgress) { ProgressMessage = 'Ваш прогресс ниже среднего по группе! Нужно постараться!'; }
    if (isNaN(averageSleep)) { SleepMessage = ''; averageSleep = 0; }
    if (isNaN(averageProgress)) { ProgressMessage = ''; averageProgress = 0; }
    if (isNaN(averageGroupProgress)) { ProgressMessage = ''; averageGroupProgress = 0; }

    // console.log('-----------studentsIdFromGroup', studentsIdFromGroup);
    // console.log('-----------averageGroupProgress', averageGroupProgress);
    // console.log(averageGroupProgress);
    // console.log('--------------averageSleep', averageSleep);
    // console.log('--------------averageProgress', averageProgress);
    res.json([newUserProgress, SleepMessage,
      ProgressMessage, averageGroupProgress, averageProgress, averageSleep]);
  });

module.exports = router;
