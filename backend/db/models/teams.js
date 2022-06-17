const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class teams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users, feedbacks }) {
      this.belongsToMany(users, { through: 'students_teams', foreignKey: 'team_id', as: 'teamStudentTeams' });
      this.hasMany(feedbacks, { foreignKey: 'team_id' });
    }
  }
  teams.init({

  }, {
    sequelize,
    modelName: 'teams',
  });
  return teams;
};
