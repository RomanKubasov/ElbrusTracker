const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  teachers.init({
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'teachers',
  });
  return teachers;
};
