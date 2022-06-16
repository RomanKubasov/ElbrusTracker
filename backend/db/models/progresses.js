const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class progresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  progresses.init({
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'progresses',
  });
  return progresses;
};
