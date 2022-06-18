import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTeamMatesRequest } from '../../Redux/actions/teamMatesAction';
import { setFeedBackToUserId } from '../../Redux/actions/feedbackToAction';
import FeedBackForm from './FeedBackForm';

function FeedBack() {
  const dispatch = useDispatch();
  const { teamMates, feedbackTo } = useSelector((state) => state);
  const id = 4; // change for User ID

  useEffect(() => {
    if (!teamMates.length) {
      dispatch(getTeamMatesRequest(id));
    }
  }, []);

  return (
    <>
      {teamMates.map((el) => (
        <div onClick={() => { dispatch(setFeedBackToUserId(el.id)); }} key={el.id}>
          {el.login}
        </div>
      ))}
      { feedbackTo ? <FeedBackForm /> : <h2>Кликните на имя для оценки</h2>}
    </>
  );
}

export default FeedBack;
