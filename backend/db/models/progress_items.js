/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class progress_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ progresses, progress_indicators }) {
      this.belongsTo(progresses, { foreignKey: 'progress_id' });
      this.belongsTo(progress_indicators, { foreignKey: 'indicator_id' });
    }
  }
  progress_items.init({
    progress_id: DataTypes.INTEGER,
    indicator_id: DataTypes.INTEGER,
    value: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'progress_items',
  });
  return progress_items;
};
