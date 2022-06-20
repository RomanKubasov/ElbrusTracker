/* eslint-disable eqeqeq */
/* eslint-disable default-param-last */
import {
  SEND_FEEDBACK,
  CLEAR_FEEDBACK,
  DELETE_FEEDBACK,
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
    case DELETE_FEEDBACK: {
      return state.filter((el) => el.id != value);
    }
    default:
      return state;
  }
};

export default feedbackReducer;
