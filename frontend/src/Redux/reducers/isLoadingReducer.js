/* eslint-disable default-param-last */
import {
  SET_ISLOADING,
} from '../types/types';

const isLoadingReducer = (state = { errorMessage: '', status: false }, action) => {
  const { type, value } = action;
  switch (type) {
    case SET_ISLOADING: {
      return value;
    }
    default:
      return state;
  }
};

export default isLoadingReducer;
