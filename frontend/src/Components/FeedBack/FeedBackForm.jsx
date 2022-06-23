/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setFeedBackToUserId } from '../../Redux/actions/feedbackToAction';
import { actionClickMetric, getFeedBackMetricsRequest } from '../../Redux/actions/feedbackMetricsAction';
import { clearFeedBack } from '../../Redux/actions/feedbackAction';
import style from './FeedBackForm.module.css';

function FeedBackForm() {
  const { feedbackTo, feedbackMetrics, user } = useSelector((state) => state);
  const { id } = user;
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState({});

  function changeTextHandler(e) {
    setInputState({ id: Number(e.target.id), value: e.target.value });
  }
  function buttonPressHandler(el) {
    dispatch(actionClickMetric(el.id));
  }
  async function submitHandler() {
    let response;
    const feedbackToBack = feedbackMetrics.filter((el) => el.clicked === true);
    const feedbackToBackPrepared = feedbackToBack.map((el) => ({ id: el.id, value: true }));
    if (Object.keys(inputState).length !== 0) {
      response = await axios.post(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/feedback`, [...feedbackToBackPrepared, inputState, { id, feedbackTo: feedbackTo.id }]);
    } else {
      response = await axios.post(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/feedback`, [...feedbackToBackPrepared, { id, feedbackTo: feedbackTo.id }]);
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
        <h3 className={style.feedbackForm__titles}>Оцениваемый студент:</h3>
        <span className={style.feedbackForm__name}>
          {feedbackTo.name}
        </span>

        <h3 className={style.feedbackForm__titles}>Сильные стороны:</h3>
        <div>
          {feedbackMetrics.filter((el) => el.type_id === 1)
            .map((el, index) => (<button className={`${style.feedBackForm__button} ${el.clicked === true ? style.active : ''}`} type="button" key={index} onClick={() => buttonPressHandler(el)}>{el.metric}</button>))}
        </div>

        <h3 className={style.feedbackForm__titles}>Зоны для развития:</h3>
        <div>
          {feedbackMetrics.filter((el) => el.type_id === 2)
            .map((el, index) => (<button className={`${style.feedBackForm__button} ${el.clicked === true ? style.active : ''}`} type="button" key={index} onClick={() => buttonPressHandler(el)}>{el.metric}</button>))}
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
              placeholder="Введите текст..."
            />
          ))}
      </div>

      <div className={style.feedBackForm__buttons}>
        <button className={style.feedBackForm__buttons__logout} type="button" onClick={() => { dispatch(setFeedBackToUserId(null)); }}>Выйти</button>
        <button className={style.feedBackForm__buttons__send} type="button" onClick={submitHandler}>Отправить</button>
      </div>
    </>
  );
}

export default FeedBackForm;
