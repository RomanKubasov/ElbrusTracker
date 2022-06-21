/* eslint-disable default-param-last */
import { GET_DATA_SOCKET } from '../types/types';

const dataSocketReducer = (state = {}, action) => {
  const { type, value } = action;
  switch (type) {
    case GET_DATA_SOCKET:
      return value;
    default:
      return state;
  }
};

export default dataSocketReducer;
