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
      },
      metric_id: {
        type: Sequelize.INTEGER,
      },
      value: {
        type: Sequelize.STRING,
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
