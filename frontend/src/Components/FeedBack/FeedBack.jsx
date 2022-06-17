import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTeamMatesRequest } from '../../Redux/actions/teamMatesAction';

function FeedBack() {
  const dispatch = useDispatch();
  const { teamMates } = useSelector((state) => state);
  const id = 4; // change for User ID

  useEffect(() => {
    if (!teamMates.length) {
      dispatch(getTeamMatesRequest(id));
    }
  }, []);

  return (
    <>
      {teamMates.map((el) => (<div onClick={() => {}} key={el.id}>{el.login}</div>))}
    </>
  );
}

export default FeedBack;
