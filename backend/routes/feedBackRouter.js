/* eslint-disable camelcase */
const express = require('express');
const { feedback_metrics, feedbacks, feedback_items } = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    const result = await feedback_metrics.findAll();
    return res.json(JSON.parse(JSON.stringify(result)));
  })
  .post(async (req, res) => {
    const arrReq = req.body;
    const { id, feedbackTo } = arrReq[arrReq.length - 1];
    const newFeedback = await feedbacks.create({
      from_user_id: id,
      to_user_id: feedbackTo,
      team_id: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const arrFeedbackItems = [];
    for (let i = 0; i < arrReq.length - 1; i += 1) {
      arrFeedbackItems.push({
        feedback_id: newFeedback.id,
        metric_id: arrReq[i].id,
        value: arrReq[i].value,
      });
    }
    await feedback_items.bulkCreate(arrFeedbackItems);
    return res.json();
  });
module.exports = router;
