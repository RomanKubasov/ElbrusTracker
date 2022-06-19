/* eslint-disable default-param-last */
import {
  SEND_FEEDBACK,
  CLEAR_FEEDBACK,
} from '../types/types';

const feedbackReducer = (state = [], action) => {
  const { type, value } = action;
  switch (type) {
    case SEND_FEEDBACK: {
      return [...state, value];
    }
    case CLEAR_FEEDBACK: {
      return [];
    }
    default:
      return state;
  }
};

export default feedbackReducer;
