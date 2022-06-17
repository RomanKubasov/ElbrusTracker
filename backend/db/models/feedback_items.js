/* eslint-disable camelcase */
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
    static associate({ feedbacks, feedback_metrics }) {
      this.belongsTo(feedbacks, { foreignKey: 'feedback_id' });
      this.belongsTo(feedback_metrics, { foreignKey: 'metric_id' });
    }
  }
  feedback_items.init({
    feedback_id: DataTypes.INTEGER,
    metric_id: DataTypes.INTEGER,
    value: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'feedback_items',
  });
  return feedback_items;
};
