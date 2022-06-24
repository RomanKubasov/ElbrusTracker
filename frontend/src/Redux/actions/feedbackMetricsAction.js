import {
  CLICK_METRIC,
  GET_FEEDBACK_METRICS,
} from '../types/types';

export const getFeedBackMetrics = (value) => ({
  type: GET_FEEDBACK_METRICS,
  value,
});

export const getFeedBackMetricsRequest = () => async (dispatch) => {
  const res = await fetch(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/feedback`);
  const data = await res.json();
  dispatch(getFeedBackMetrics(JSON.parse(JSON.stringify(data))));
};
export const actionClickMetric = (id) => ({
  type: CLICK_METRIC,
  value: id,
});
