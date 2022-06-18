/* eslint-disable default-param-last */
import {
  GET_FEEDBACK_METRICS,
} from '../types/types';

const feedbackMetricsReducer = (state = [], action) => {
  const { type, value } = action;
  switch (type) {
    case GET_FEEDBACK_METRICS: {
      return value;
    }
    default:
      return state;
  }
};

export default feedbackMetricsReducer;
