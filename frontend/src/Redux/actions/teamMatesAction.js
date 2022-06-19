import {
  GET_TEAMMATES,
} from '../types/types';

export const getTeamMates = (value) => ({
  type: GET_TEAMMATES,
  value,
});

export const getTeamMatesRequest = (id) => async (dispatch) => {
  const res = await fetch('http://localhost:3001/teammates', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  dispatch(getTeamMates(JSON.parse(JSON.stringify(data))));
};
