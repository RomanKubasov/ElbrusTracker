/* eslint-disable default-param-last */
import {
  GET_MYFEEDBACK,
} from '../types/types';

const myFeedbackReducer = (state = {}, action) => {
  const { type, value } = action;
  switch (type) {
    case GET_MYFEEDBACK: {
      return value;
    }
    default:
      return state;
  }
};

export default myFeedbackReducer;
