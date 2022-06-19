/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setFeedBackToUserId } from '../../Redux/actions/feedbackToAction';
import { getFeedBackMetricsRequest } from '../../Redux/actions/feedbackMetricsAction';
import { sendFeedBack, clearFeedBack } from '../../Redux/actions/feedbackAction';

function FeedBackForm() {
  const currentUserId = 10; // id текущего пользователя
  const { feedbackTo, feedbackMetrics, feedback } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState({});
  function changeTextHandler(e) {
    setInputState({ id: Number(e.target.id), value: e.target.value });
  }
  function buttonPressHandler(el) {
    dispatch(sendFeedBack({ id: el.id, value: 'true' }));
  }
  async function submitHandler() {
    const response = await axios.post('http://localhost:3001/feedback', [...feedback, inputState, { currentUserId, feedbackTo }]);
    if (response.status === 200) {
      setInputState({});
      dispatch(clearFeedBack());
      dispatch(setFeedBackToUserId(null));
    }
  }
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
        .map((el, index) => (<button type="button" key={index} onClick={() => buttonPressHandler(el)}>{el.metric}</button>))}
      <p>Зоны для развития</p>
      {feedbackMetrics.filter((el) => el.type_id === 2)
        .map((el, index) => (<button type="button" key={index} onClick={() => buttonPressHandler(el)}>{el.metric}</button>))}
      <p>Можете что-то добавить в произвольной форме</p>
      {feedbackMetrics.filter((el) => el.type_id === 3)
        .map((el, index) => (<input id={el.id} onChange={changeTextHandler} key={index} />))}
      <br />
      <br />
      <button type="button" onClick={() => { dispatch(setFeedBackToUserId(null)); }}>Выйти</button>
      <button type="button" onClick={submitHandler}>Отправить</button>
    </>
  );
}

export default FeedBackForm;
