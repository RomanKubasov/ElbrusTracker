/* eslint-disable camelcase */
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
    static associate({ feedback_metrics_types, feedback_items }) {
      this.belongsTo(feedback_metrics_types, { foreignKey: 'type_id' });
      this.hasMany(feedback_items, { foreignKey: 'metric_id' });
    }
  }
  feedback_metrics.init({
    metric: DataTypes.TEXT,
    type_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'feedback_metrics',
  });
  return feedback_metrics;
};
