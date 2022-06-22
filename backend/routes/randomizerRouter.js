const express = require('express');

const router = express.Router();

const { users } = require('../db/models');

// const allUsers = users.findAll();
// const allUsers = (array) => {
//     let allFeedbacks = [];
//     for (let i = 0; i < array.length; i++) {
//       allFeedbacks = [...allFeedbacks, ...array[i].feedback_items.map((el) => ({
//         id: el.metric_id,
//         metric: el.feedback_metric.metric,
//         type_id: el.feedback_metric.type_id,
//         value: el.value,
//       }))];
//     }
//     return allFeedbacks;
//   };

// let usersName =

// btn.addEventListener('click', function(){
//   let c = cities.map(item => item);
//   for ( let i = 0; i < 10; i++ ) {
//     let ind = Math.floor(Math.random() * c.length);
//     let item = document.createElement('li');
//     list.append(item);
//     item.textContent = c[ind];
//     c.splice(ind, 1);
//   }
//
// router.route('/')
// async (req, res) => {
//   router.route('/')
//   .get(async (req, res, next) => {
//     const allUsers = await users.findAll();
//     return res.json(JSON.parse(JSON.stringify(allUsers)));
//   })
// .post(async (req, res) => {
//   console.log(req.body);
//   const arrReq = req.body;
//   const { currentUserId, feedbackTo } = arrReq[arrReq.length - 1];
//   const newFeedback = await feedbacks.create({
//     from_user_id: currentUserId,
//     to_user_id: feedbackTo,
//     team_id: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   });
//   const arrFeedbackItems = [];
//   for (let i = 0; i < arrReq.length - 1; i += 1) {
//     arrFeedbackItems.push({
//       feedback_id: newFeedback.id,
//       metric_id: arrReq[i].id,
//       value: arrReq[i].value,
//     });
//   }
//   await feedback_items.bulkCreate(arrFeedbackItems);
//   return res.json();
// });

// for (let i = 0; i < allUsers.length; i++) {
// if (allUsers[i].userId === req.session?.userId) {
//   allUsers[i].myItem = true;
// } else {
//   allUsers[i].myItem = false;
// }
// }
// router.route('/') // отрисовка страницы с инпутом по количеству человек в одной команде (кнопка собрать группы (толькодля учителей
//   .get(async (req, res) => {
//     console.log('we are here');
//     const allUsers = users.findAll();
//     for (let i = 0; i < allUsers.length; i += 1) {
//       const allUsersName = allUsers.map((el) => el.name);
//       console.log(allUsersName);
//       //     allUsers.map((el) => ({ name: el[0] }));
//       res.sendStatus(200, 'ok');
//     }
//   });

//   };
//   )
// router.route('/stayrandomized').post() // генерирование групп
//   .post();

router.route('/')
  .get(async (req, res) => {
    const allUsers = await users.findAll();
    return JSON.parse(JSON.stringify(allUsers)).map((el) => el.name);
  });
//   .post(async (req, res) => {
//   console.log(req.body);
//   const arrReq = req.body;
//   const { currentUserId, feedbackTo } = arrReq[arrReq.length - 1];
//   const newFeedback = await feedbacks.create({
//     from_user_id: currentUserId,
//     to_user_id: feedbackTo,
//     team_id: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   });
//   const arrFeedbackItems = [];
//   for (let i = 0; i < arrReq.length - 1; i += 1) {
//     arrFeedbackItems.push({
//       feedback_id: newFeedback.id,
//       metric_id: arrReq[i].id,
//       value: arrReq[i].value,
//     });
//   }
//   await feedback_items.bulkCreate(arrFeedbackItems);
//   return res.json();
// });

module.exports = router;
