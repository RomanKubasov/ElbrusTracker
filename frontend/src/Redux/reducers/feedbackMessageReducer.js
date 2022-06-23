/* eslint-disable default-param-last */
import { FEEDBACK_SHOW_MESSAGE } from '../types/types';

const feedbackMessageReducer = (state = false, action) => {
  const { type, value } = action;
  switch (type) {
    case FEEDBACK_SHOW_MESSAGE:
      return value;
    default:
      return state;
  }
};

export default feedbackMessageReducer;
