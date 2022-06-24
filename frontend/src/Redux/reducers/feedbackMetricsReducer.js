/* eslint-disable default-param-last */
import {
  CLICK_METRIC,
  GET_FEEDBACK_METRICS,
} from '../types/types';

const feedbackMetricsReducer = (state = [], action) => {
  const { type, value } = action;
  switch (type) {
    case GET_FEEDBACK_METRICS: {
      return value.map((el) => ({ ...el, clicked: false }));
    }
    case CLICK_METRIC: {
      return state.map((el) => (el.id === value ? ({ ...el, clicked: !el.clicked }) : el));
    }
    default:
      return state;
  }
};

export default feedbackMetricsReducer;
