import {
  GET_MYFEEDBACK,
} from '../types/types';

export const getMyFeedback = (value) => ({
  type: GET_MYFEEDBACK,
  value,
});

export const getMyFeedbackRequest = (id) => async (dispatch) => {
  const res = await fetch(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/myfeedback`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  dispatch(getMyFeedback(JSON.parse(JSON.stringify(data))));
};
