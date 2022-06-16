const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class feedback_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feedback_items.init({
    feedback_id: DataTypes.INTEGER,
    metric_id: DataTypes.INTEGER,
    value: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'feedback_items',
  });
  return feedback_items;
};
