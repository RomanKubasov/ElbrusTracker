const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users }) {
      this.hasMany(users, { foreignKey: 'role_id' });
    }
  }
  roles.init({
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};
