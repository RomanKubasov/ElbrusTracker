/* eslint-disable default-param-last */
import {
  SET_FEEDBACK_TO_USERID,
} from '../types/types';

const feedbackToReducer = (state = null, action) => {
  const { type, value } = action;
  switch (type) {
    case SET_FEEDBACK_TO_USERID: {
      return value;
    }
    default:
      return state;
  }
};

export default feedbackToReducer;
