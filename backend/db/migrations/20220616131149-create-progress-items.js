module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('progress_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      progress_id: {
        type: Sequelize.INTEGER,
      },
      indicator_id: {
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
    await queryInterface.dropTable('progress_items');
  },
};
