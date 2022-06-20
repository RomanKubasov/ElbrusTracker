/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
const express = require('express');
const { feedbacks, feedback_items, feedback_metrics } = require('../db/models');

const router = express.Router();

const allFeedbackMetrics = (array) => {
  let allFeedbacks = [];
  for (let i = 0; i < array.length; i++) {
    allFeedbacks = [...allFeedbacks, ...array[i].feedback_items.map((el) => ({
      id: el.metric_id,
      metric: el.feedback_metric.metric,
      type_id: el.feedback_metric.type_id,
      value: el.value,
    }))];
  }
  return allFeedbacks;
};

const countFeedbackMetrics = (arrayFeedbacks) => {
  const array = [];
  for (let i = 0; i < arrayFeedbacks.length; i++) {
    let counter = false;
    for (let j = 0; j < array.length; j++) {
      if (arrayFeedbacks[i].type_id !== 3) {
        if (array[j].id === arrayFeedbacks[i].id) {
          array[j].value++;
          counter = true;
        }
      } else if (array[j].id === arrayFeedbacks[i].id) {
        array[j].value.push(arrayFeedbacks[i].value);
        counter = true;
      }
    }
    if (!counter) {
      if (arrayFeedbacks[i].type_id !== 3) {
        array.push({ ...arrayFeedbacks[i], value: 1 });
      } else {
        array.push({ ...arrayFeedbacks[i], value: [arrayFeedbacks[i].value] });
      }
    }
  }
  return array;
};

router.route('/')
  .post(async (req, res, next) => {
    const { id } = req.body;
    let result = await feedbacks.findAll({
      where: { to_user_id: id },
      include: {
        model: feedback_items,
        attributes: ['metric_id', 'value'],
        include: {
          model: feedback_metrics,
          attributes: ['metric', 'type_id'],
        },
      },
    });
    result = JSON.parse(JSON.stringify(result));
    const countFeedbacks = result.length;
    const countRespondents = [...new Set(result.map((el) => el.from_user_id))].length;
    const allFeedbacks = countFeedbackMetrics(allFeedbackMetrics(result));
    return res.json({ countFeedbacks, countRespondents, allFeedbacks });
  });

module.exports = router;
