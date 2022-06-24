import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestTeamMates } from '../../Redux/actions/teamMatesAction';
import { setFeedBackToUserId } from '../../Redux/actions/feedbackToAction';
import FeedBackForm from './FeedBackForm';
import style from './FeedBack.module.css';
import { showMessage } from '../../Redux/actions/feedbackMessageAction';

function FeedBack() {
  const dispatch = useDispatch();
  const {
    teamMates, feedbackTo, user, feedbackMessage,
  } = useSelector((state) => state);
  const { id } = user;

  useEffect(() => {
    if (!teamMates.length) {
      dispatch(requestTeamMates(id));
    }
  }, [id]);

  useEffect(() => {
    dispatch(showMessage(false));
  }, []);

  function clickHandler(el) {
    dispatch(setFeedBackToUserId({ id: el.id, name: el.name }));
    dispatch(showMessage(false));
  }

  return (
    <>
      <div className={style.users__block}>
        {teamMates.map((el) => (
          <div
            className={style.users}
            onClick={() => clickHandler(el)}
            key={el.id}
          >
            {el.name}
          </div>
        ))}
      </div>
      {feedbackTo
        ? <FeedBackForm />
        : <h2 className={style.users__score}>Кликните на имя для оценки!</h2>}
      <br />
      <br />
      {feedbackMessage ? <h2 className={style.users__score}>Фидбэк отправлен!</h2> : null}
    </>
  );
}

export default FeedBack;
