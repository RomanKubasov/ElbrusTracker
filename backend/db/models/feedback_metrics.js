const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class feedback_metrics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feedback_metrics.init({
    metric: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'feedback_metrics',
  });
  return feedback_metrics;
};
