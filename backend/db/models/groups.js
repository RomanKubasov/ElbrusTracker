const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users }) {
      this.belongsToMany(users, { through: 'teachers', foreignKey: 'group_id', as: 'groupTeachers' });
      this.belongsToMany(users, { through: 'students', foreignKey: 'group_id', as: 'groupStudents' });
    }
  }
  groups.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'groups',
  });
  return groups;
};
