import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFeedBackToUserId } from '../../Redux/actions/feedbackToAction';
import { getFeedBackMetricsRequest } from '../../Redux/actions/feedbackMetricsAction';
import { sendFeedBack } from '../../Redux/actions/feedbackAction';

function FeedBackForm() {
  const { feedbackTo, feedbackMetrics } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getFeedBackMetricsRequest()); }, []);
  useEffect(() => { dispatch(getFeedBackMetricsRequest()); }, [feedbackTo]);

  return (
    <>
      <br />
      <br />
      Вы оцениваете
      {' '}
      {feedbackTo}
      <br />
      <br />
      <p>Сильные стороны</p>
      {feedbackMetrics.filter((el) => el.type_id === 1)
        .map((el) => (<button type="button" onClick={() => dispatch(sendFeedBack({ id: el.id, value: true }))}>{el.metric}</button>))}
      <p>Зоны для развития</p>
      {feedbackMetrics.filter((el) => el.type_id === 2)
        .map((el) => (<button type="button" onClick={() => dispatch(sendFeedBack({ id: el.id, value: true }))}>{el.metric}</button>))}
      <p>Можете что-то добавить в произвольной форме</p>
      {feedbackMetrics.filter((el) => el.type_id === 3)
        .map((el) => (<input />))}
      <br />
      <br />
      <button type="button" onClick={() => { dispatch(setFeedBackToUserId(null)); }}>Выйти</button>
    </>
  );
}

export default FeedBackForm;
