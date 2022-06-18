import {
  GET_MYFEEDBACK,
} from '../types/types';

export const getMyFeedback = (value) => ({
  type: GET_MYFEEDBACK,
  value,
});

export const getMyFeedbackRequest = (id) => async (dispatch) => {
  const res = await fetch('http://localhost:3001/myfeedback', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  dispatch(getMyFeedback(JSON.parse(JSON.stringify(data))));
};
