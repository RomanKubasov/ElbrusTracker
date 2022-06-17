/* eslint-disable default-param-last */
import {
  SEND_FEEDBACK,
} from '../types/types';

const feedbackReducer = (state = [], action) => {
  const { type, value } = action;
  switch (type) {
    case SEND_FEEDBACK: {
      state.push(value);
      return state;
    }
    default:
      return state;
  }
};

export default feedbackReducer;
