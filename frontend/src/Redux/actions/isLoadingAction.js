/* eslint-disable import/prefer-default-export */
import {
  SET_ISLOADING,
} from '../types/types';

export const setIsLoading = (value) => ({
  type: SET_ISLOADING,
  value,
});
