const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class feedback_metrics_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feedback_metrics_types.init({
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'feedback_metrics_types',
  });
  return feedback_metrics_types;
};
