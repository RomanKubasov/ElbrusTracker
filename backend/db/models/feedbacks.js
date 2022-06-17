/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class feedbacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ teams, users, feedback_items }) {
      this.belongsTo(teams, { foreignKey: 'team_id' });
      this.belongsTo(users, { foreignKey: 'from_user_id', as: 'feedbackFromFeedbacks' });
      this.belongsTo(users, { foreignKey: 'to_user_id', as: 'feedbackToFeedbacks' });
      this.hasMany(feedback_items, { foreignKey: 'feedback_id' });
    }
  }
  feedbacks.init({
    from_user_id: DataTypes.INTEGER,
    to_user_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'feedbacks',
  });
  return feedbacks;
};
