/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class progress_indicators extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ progress_items }) {
      this.hasMany(progress_items, { foreignKey: 'indicator_id' });
    }
  }
  progress_indicators.init({
    indicator: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'progress_indicators',
  });
  return progress_indicators;
};
