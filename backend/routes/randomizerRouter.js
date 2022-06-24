/* eslint-disable prefer-destructuring */
const router = require('express').Router();
const axios = require('axios');
const { users, groups, students } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { group, count } = req.body;
    let groupId = await groups.findOne({ where: { name: group } });
    groupId = JSON.parse(JSON.stringify(groupId));
    let studentsOfGroup = await students.findAll({ where: { group_id: groupId.id } });
    studentsOfGroup = JSON.parse(JSON.stringify(studentsOfGroup));
    let studentNames = await users.findAll();
    studentNames = JSON.parse(JSON.stringify(studentNames));
    studentsOfGroup = studentsOfGroup.map((el) => el.user_id);
    studentNames = studentNames
      .map((el) => ({ id: el.id, name: el.name }))
      .filter((el) => studentsOfGroup.indexOf(el.id) !== (-1));
    const teamCount = Math.floor(studentNames.length / count);
    const teamsArr = [];
    for (let i = 0; i < teamCount; i += 1) {
      teamsArr.push([]);
    }
    let deletedEl = {};
    let randomCount = 0;
    let x = 0;
    const { length } = studentNames;
    const studentsOnlyNames = studentNames.map((el) => ` ${el.name}`);
    for (let i = 0; i < length; i += 1) {
      randomCount = Math.round(Math.random(0, 1) * (studentsOnlyNames.length - 1));
      deletedEl = studentsOnlyNames.splice(randomCount, 1)[0];
      teamsArr[x].push(deletedEl);
      x += 1;
      if (x === teamsArr.length) {
        x = 0;
      }
    }
    let stringTeams = '';
    for (let i = 1; i <= teamCount; i += 1) {
      stringTeams += `team ${i}:${teamsArr[i - 1]}\n`;
    }
    await axios.post(process.env.BOT_WEBHOOK, {
      text: stringTeams,
    });
    res.json(teamsArr);
  });

module.exports = router;
