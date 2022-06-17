/* eslint-disable camelcase */
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
    static associate({ users, progress_items }) {
      this.belongsTo(users, { foreignKey: 'user_id' });
      this.hasMany(progress_items, { foreignKey: 'progress_id' });
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
