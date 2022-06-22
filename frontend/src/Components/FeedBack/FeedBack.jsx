import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTeamMatesRequest } from '../../Redux/actions/teamMatesAction';
import { setFeedBackToUserId } from '../../Redux/actions/feedbackToAction';
import FeedBackForm from './FeedBackForm';
import style from './FeedBack.module.css';

function FeedBack() {
  const dispatch = useDispatch();
  const { teamMates, feedbackTo, user } = useSelector((state) => state);
  const { id } = user;

  useEffect(() => {
    if (!teamMates.length) {
      dispatch(getTeamMatesRequest(id));
    }
  }, []);

  return (
    <>
      <div className={style.users__block}>
        {teamMates.map((el) => (
          <div
            className={style.users}
            onClick={() => { dispatch(setFeedBackToUserId(el.id)); }}
            key={el.id}
          >
            {el.login}
          </div>
        ))}
      </div>
      { feedbackTo
        ? <FeedBackForm />
        : <h2 className={style.users__score}>Кликните на имя для оценки!</h2>}
    </>
  );
}

export default FeedBack;
