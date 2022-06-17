/* eslint-disable camelcase */
module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = [
      { role: 'teacher', createdAt: new Date(), updatedAt: new Date() },
      { role: 'student', createdAt: new Date(), updatedAt: new Date() },
    ];

    const feedback_metrics = [
      {
        metric: 'лидер', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'командный игрок', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'с чувством юмора', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'помогает', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'выполняет обещания', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'инициативный', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'эмпатичный', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'пишет понятный код', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'честный', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'просто красавчик', type_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'не всегда можно договориться', type_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'может не сдержать обещание', type_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'часто отвлекается', type_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'не понимаю его код', type_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'закрыт в общении', type_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'задает много вопросов', type_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'очень громкий', type_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'не признает ошибки', type_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        metric: 'фидбек', type_id: 3, createdAt: new Date(), updatedAt: new Date(),
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
        name: 'arctic_foxes22', createdAt: new Date(), updatedAt: new Date(),
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
        indicator: 'performance', createdAt: new Date(), updatedAt: new Date(),
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
        user_id: 4, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 5, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 6, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 7, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 8, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 9, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 10, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 11, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 12, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 13, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 14, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 15, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 16, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 17, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 18, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 19, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 20, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const users = [
      {
        name: null, login: 'panferovDev', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'balkoev', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'd4rsen', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'RomanKubasov', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'ABessonov', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'omarovfrontend', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'errraaaa', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'AliasFinn', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'lisaliskin', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'Khkimov', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'RamK-16', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'pavelkazhgin', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: '89163091443', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'elefant86', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'MrIcePea', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'playbey', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'JackieSav', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'VictorKarvatsky', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'ToxicYouth', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: null, login: 'Engagelol', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const teams = [
      { createdAt: new Date(), updatedAt: new Date() },
      { createdAt: new Date(), updatedAt: new Date() },
      { createdAt: new Date(), updatedAt: new Date() },
      { createdAt: new Date(), updatedAt: new Date() },
    ];
    const students_teams = [
      {
        team_id: 1, user_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 1, user_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 1, user_id: 7, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 1, user_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 2, user_id: 9, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 2, user_id: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 2, user_id: 11, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 2, user_id: 12, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 3, user_id: 13, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 3, user_id: 14, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 3, user_id: 15, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 3, user_id: 16, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 4, user_id: 17, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 4, user_id: 18, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 4, user_id: 19, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 4, user_id: 20, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('roles', roles);
    await queryInterface.bulkInsert('feedback_metrics_types', feedback_metrics_types);
    await queryInterface.bulkInsert('progress_indicators', progress_indicators);
    await queryInterface.bulkInsert('groups', groups);
    await queryInterface.bulkInsert('feedback_metrics', feedback_metrics);
    await queryInterface.bulkInsert('users', users);
    await queryInterface.bulkInsert('teachers', teachers);
    await queryInterface.bulkInsert('students', students);
    await queryInterface.bulkInsert('teams', teams);
    await queryInterface.bulkInsert('students_teams', students_teams);
  },

  async down(queryInterface, Sequelize) {
  },
};
