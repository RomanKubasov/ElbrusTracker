/* eslint-disable no-unused-vars */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('feedback_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      feedback_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'feedbacks',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      metric_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'feedback_metrics',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      value: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('feedback_items');
  },
};
