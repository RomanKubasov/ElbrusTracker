/* eslint-disable default-param-last */
import {
  GET_TEAMMATES,
} from '../types/types';

const teamMatesReducer = (state = [], action) => {
  const { type, value } = action;
  switch (type) {
    case GET_TEAMMATES: {
      return value;
    }
    default:
      return state;
  }
};

export default teamMatesReducer;
