const { teams, users } = require('./db/models');

/* recieve array of teams and UserID, return all teamMates IDs */
const findTeamMates = (arrTeams, id) => {
  let teamMates = [];
  for (let i = 0; i < arrTeams.length; i++) {
    const currentTeam = arrTeams[i].teamStudentTeams.map((el) => el.id);
    if (currentTeam.includes(id, 0)) {
      teamMates = [...teamMates, ...currentTeam];
    }
  }
  return [...new Set(teamMates)];
};

/* request to DB, insert it into route .get */
const func = async (id) => {
  /* from here */
  const res = await teams.findAll({
    include: {
      model: users,
      as: 'teamStudentTeams',
    },
  });
  return findTeamMates(JSON.parse(JSON.stringify(res)), id);
  /* to here */
};
