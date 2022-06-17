import {
  GET_FEEDBACK_METRICS,
} from '../types/types';

export const getFeedBackMetrics = (value) => ({
  type: GET_FEEDBACK_METRICS,
  value,
});

export const getFeedBackMetricsRequest = () => async (dispatch) => {
  const res = await fetch('http://localhost:3001/feedback');
  const data = await res.json();
  dispatch(getFeedBackMetrics(JSON.parse(JSON.stringify(data))));
};
