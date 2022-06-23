/* eslint-disable camelcase */
const fs = require('fs').promises;
const bcrypt = require('bcrypt');
const path = require('path');

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
    const feedbacks = [
      {
        from_user_id: 5, to_user_id: 22, team_id: null, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        from_user_id: 23, to_user_id: 22, team_id: null, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        from_user_id: 5, to_user_id: 22, team_id: null, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const feedback_items = [
      {
        feedback_id: 1, metric_id: 1, value: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 1, metric_id: 2, value: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 1, metric_id: 3, value: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 1, metric_id: 15, value: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 1, metric_id: 16, value: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 1, metric_id: 19, value: 'в целом, отличный парень', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 2, metric_id: 1, value: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 2, metric_id: 2, value: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 2, metric_id: 6, value: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 2, metric_id: 12, value: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 2, metric_id: 19, value: 'иногда разговаривает сам с собой, в остальном, все хорошо...', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        feedback_id: 3, metric_id: 19, value: 'а еще он крестиком вышивает ;)', createdAt: new Date(), updatedAt: new Date(),
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
      {
        user_id: 21, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 22, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 23, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 24, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 25, group_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 26, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 27, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 28, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 29, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 30, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 31, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 32, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 33, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 34, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 35, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 36, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 37, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 38, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 39, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 40, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 41, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 42, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 43, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 44, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 45, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 46, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 47, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 48, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 49, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 50, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 51, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 52, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 53, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 54, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 55, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 56, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 57, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 58, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 59, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 60, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 61, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 62, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 63, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 64, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 65, group_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 66, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 67, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 68, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 69, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 70, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 71, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 72, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 73, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 74, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 75, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 76, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 77, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 78, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 79, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 80, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 81, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 82, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 83, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 84, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 85, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 86, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 87, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 88, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 89, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 90, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 91, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 92, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 93, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 94, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 95, group_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    const users1 = [
      {
        name: 'Антон Панферов', login: 'panferovDev', git_id: null, avatar_url: 'https://avatars.githubusercontent.com/u/17177093?v=4', pass: await bcrypt.hash('123', 10), role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Адам Балкоев', login: 'balkoev', git_id: null, avatar_url: 'https://avatars.githubusercontent.com/u/22626213?v=4', pass: await bcrypt.hash('123', 10), role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Дарсен Унгарлинов', login: 'd4rsen', git_id: null, avatar_url: 'https://avatars.githubusercontent.com/u/89852964?v=4', pass: await bcrypt.hash('123', 10), role_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    const users2 = (await fs.readFile(path.join(process.env.PWD, 'db/seeders/students.txt'), 'utf-8'))
      .split('\n').filter((el) => el !== '')
      .map((el) => el.split('\t'))
      .map((el) => ({
        name: el[0],
        login: el[1].split('\https://github.com/', 2).slice(1)[0],
        git_id: null,
        avatar_url: null,
        pass: null,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    const users = users1.concat(users2);

    // const users = users1;

    // const users = [
    //   {
    //     name: null, login: 'panferovDev', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'balkoev', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'd4rsen', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'RomanKubasov', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'ABessonov', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'omarovfrontend', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'errraaaa', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'AliasFinn', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'lisaliskin', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'Khkimov', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'RamK-16', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'pavelkazhgin', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: '89163091443', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'elefant86', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'MrIcePea', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'playbey', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'JackieSav', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'VictorKarvatsky', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'ToxicYouth', avatar_url: null, pass: null, role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    //   },
    //   {
    //     name: null, login: 'Engagelol', avatar_url: null, pass: null, role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    //   },
    // ];
    const teams = [
      { createdAt: new Date(), updatedAt: new Date() },
      { createdAt: new Date(), updatedAt: new Date() },
      { createdAt: new Date(), updatedAt: new Date() },
      { createdAt: new Date(), updatedAt: new Date() },
    ];
    const students_teams = [
      {
        team_id: 1, user_id: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 1, user_id: 23, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 1, user_id: 24, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 1, user_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 1, user_id: 22, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 2, user_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 2, user_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 2, user_id: 20, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 2, user_id: 16, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 3, user_id: 11, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 3, user_id: 12, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 3, user_id: 15, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 3, user_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 4, user_id: 7, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 4, user_id: 9, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 4, user_id: 14, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        team_id: 4, user_id: 21, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const progresses = [
      {
        date: new Date(2022, 6, 13), user_id: 22, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        date: new Date(2022, 6, 14), user_id: 22, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        date: new Date(2022, 6, 15), user_id: 22, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const progress_items = [
      {
        progress_id: 1, indicator_id: 2, value: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        progress_id: 1, indicator_id: 1, value: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        progress_id: 1, indicator_id: 3, value: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        progress_id: 2, indicator_id: 2, value: 2.5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        progress_id: 2, indicator_id: 1, value: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        progress_id: 2, indicator_id: 3, value: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        progress_id: 3, indicator_id: 2, value: 7.5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        progress_id: 3, indicator_id: 1, value: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        progress_id: 3, indicator_id: 3, value: 0, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('roles', roles);
    await queryInterface.bulkInsert('feedback_metrics_types', feedback_metrics_types);
    await queryInterface.bulkInsert('progress_indicators', progress_indicators);
    await queryInterface.bulkInsert('groups', groups);
    await queryInterface.bulkInsert('feedback_metrics', feedback_metrics);
    await queryInterface.bulkInsert('users', users);
    await queryInterface.bulkInsert('progresses', progresses);
    await queryInterface.bulkInsert('progress_items', progress_items);
    await queryInterface.bulkInsert('teachers', teachers);
    await queryInterface.bulkInsert('students', students);
    await queryInterface.bulkInsert('teams', teams);
    await queryInterface.bulkInsert('students_teams', students_teams);
    await queryInterface.bulkInsert('feedbacks', feedbacks);
    await queryInterface.bulkInsert('feedback_items', feedback_items);
  },

  async down(queryInterface, Sequelize) {
  },
};
