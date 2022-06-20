/* eslint-disable default-param-last */
import { SET_USER } from '../types/types';

const userReducer = (state = {}, action) => {
  const { type, value } = action;
  switch (type) {
    case SET_USER:
      return value;
    default:
      return state;
  }
};

export default userReducer;
