const express = require('express');
const { teams, users } = require('../db/models');

const router = express.Router();

/* recieve array of teams and UserID, return all teamMates IDs */
const findTeamMates = (arrTeams, id) => {
  let teamMates = [];
  for (let i = 0; i < arrTeams.length; i++) {
    const currentTeam = arrTeams[i].teamStudentTeams.map((el) => ({ id: el.id, login: el.login }));
    if (currentTeam.map((el) => el.id).includes(id, 0)) {
      teamMates = [...teamMates, ...currentTeam];
    }
  }
  return [...new Set(teamMates)];
};

router.route('/')
  .post(async (req, res, next) => {
    const { id } = req.body;
    let result = await teams.findAll({
      include: {
        model: users,
        as: 'teamStudentTeams',
      },
    });
    result = findTeamMates(JSON.parse(JSON.stringify(result)), id);
    return res.json(result);
  });

module.exports = router;
