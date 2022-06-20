/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setFeedBackToUserId } from '../../Redux/actions/feedbackToAction';
import { getFeedBackMetricsRequest } from '../../Redux/actions/feedbackMetricsAction';
import { sendFeedBack, clearFeedBack, deleteFeedBack } from '../../Redux/actions/feedbackAction';
import style from './FeedBackForm.module.css';

function FeedBackForm() {
  const currentUserId = 10; // id текущего пользователя
  const { feedbackTo, feedbackMetrics, feedback } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState({});
  function changeTextHandler(e) {
    setInputState({ id: Number(e.target.id), value: e.target.value });
  }
  function buttonPressHandler(el) {
    if (feedback.length === 0) {
      dispatch(sendFeedBack({ id: el.id, value: 'true' }));
    } else {
      for (let i = 0; i < feedback.length; i += 1) {
        if (feedback[i].id == el.id) {
          dispatch(deleteFeedBack(el.id));
        } else {
          dispatch(sendFeedBack({ id: el.id, value: 'true' }));
        }
      }
    }
  }
  async function submitHandler() {
    let response;
    if (Object.keys(inputState).length !== 0) {
      response = await axios.post('http://localhost:3001/feedback', [...feedback, inputState, { currentUserId, feedbackTo }]);
    } else {
      response = await axios.post('http://localhost:3001/feedback', [...feedback, { currentUserId, feedbackTo }]);
    }
    if (response.status === 200) {
      setInputState({});
      dispatch(clearFeedBack());
      dispatch(setFeedBackToUserId(null));
    }
  }
  function exitHandler() {
    setInputState({});
    dispatch(clearFeedBack());
    dispatch(setFeedBackToUserId(null));
  }
  useEffect(() => { dispatch(getFeedBackMetricsRequest()); }, []);
  useEffect(() => { dispatch(getFeedBackMetricsRequest()); }, [feedbackTo]);
  return (
    <>
      <div className={style.feedbackForm__block}>
        <h3 className={style.feedbackForm__titles}>Вы оцениваете:</h3>
        {' '}
        {feedbackTo}

        <h3 className={style.feedbackForm__titles}>Сильные стороны:</h3>
        <div>
          {feedbackMetrics.filter((el) => el.type_id === 1)
            .map((el, index) => (<button className={style.feedBackForm__button} type="button" key={index} onClick={() => buttonPressHandler(el)}>{el.metric}</button>))}
        </div>

        <h3 className={style.feedbackForm__titles}>Зоны для развития:</h3>
        <div>
          {feedbackMetrics.filter((el) => el.type_id === 2)
            .map((el, index) => (<button className={style.feedBackForm__button} type="button" key={index} onClick={() => buttonPressHandler(el)}>{el.metric}</button>))}
        </div>

        <h3 className={style.feedbackForm__titles}>
          Можете что-то добавить в произвольной форме...
        </h3>
        {feedbackMetrics.filter((el) => el.type_id === 3)
          .map((el, index) => (
            <textarea
              className={style.feedBackForm__text}
              cols="60"
              rows="3"
              id={el.id}
              onChange={changeTextHandler}
              key={index}
            />
          ))}
      </div>

      <div className={style.feedBackForm__buttons}>
        <button type="button" onClick={() => { dispatch(setFeedBackToUserId(null)); }}>Выйти</button>
        <button type="button" onClick={submitHandler}>Отправить</button>
      </div>
    </>
  );
}

export default FeedBackForm;
