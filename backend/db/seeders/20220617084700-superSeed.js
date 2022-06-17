module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = [
      { role: 'teacher', createdAt: new Date(), updatedAt: new Date() },
      { role: 'student', createdAt: new Date(), updatedAt: new Date() },
    ];

    const feedback_metrics = [
      {
        metric: 'leader', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'team_player', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'helper', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'textbox', type_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const feedback_metrics_types = [
      {
        type: 'strength', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        type: 'weakness', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        type: 'text', createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const groups = [
      {
        name: 'leopards22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'bears22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'tigers22', createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    const progress_indicators = [
      {
        indicator: 'sleep', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        indicator: 'mood', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        indicator: 'perfomance', createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const teachers = [
      {
        user_id: 1, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 1, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 2, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 3, group_id: null, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const students = [
      {
        user_id: 1, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 1, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 2, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 3, group_id: null, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const users = [
      {
        name: 'Anton', login: ,git_id: ,avatar_url: null,pass: null,role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        name: 'Anton', login: ,git_id: ,avatar_url: null,pass: null,role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        name: 'Anton', login: ,git_id: ,avatar_url: null,pass: null,role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        name: 'Anton', login: ,git_id: ,avatar_url: null,pass: null,role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        name: 'Anton', login: ,git_id: ,avatar_url: null,pass: null,role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        name: 'Anton', login: ,git_id: ,avatar_url: null,pass: null,role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        name: 'Anton', login: ,git_id: ,avatar_url: null,pass: null,role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        name: 'Anton', login: ,git_id: ,avatar_url: null,pass: null,role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      }, 
    ];
    await queryInterface.bulkInsert('categories', categories);
    await queryInterface.bulkInsert('roles', roles);
    await queryInterface.bulkInsert('owners', owners);
    await queryInterface.bulkInsert('pets', pets);
    await queryInterface.bulkInsert('likes', likes);
    await queryInterface.bulkInsert('carts', carts);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
