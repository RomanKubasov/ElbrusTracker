const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      roles, groups, teams, feedbacks, progresses,
    }) {
      this.belongsTo(roles, { foreignKey: 'role_id' });
      this.belongsToMany(groups, { through: 'teachers', foreignKey: 'user_id', as: 'userTeachers' });
      this.belongsToMany(groups, { through: 'students', foreignKey: 'user_id', as: 'userStudents' });
      this.belongsToMany(teams, { through: 'students_teams', foreignKey: 'user_id', as: 'userStudentTeams' });
      this.hasMany(feedbacks, { foreignKey: 'from_user_id', as: 'userFromFeedbacks' });
      this.hasMany(feedbacks, { foreignKey: 'to_user_id', as: 'userToFeedbacks' });
      this.hasMany(progresses, { foreignKey: 'user_id' });
    }
  }
  users.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    git_id: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
    pass: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
