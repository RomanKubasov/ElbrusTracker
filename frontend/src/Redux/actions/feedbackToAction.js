/* eslint-disable import/prefer-default-export */
import {
  SET_FEEDBACK_TO_USERID,
} from '../types/types';

export const setFeedBackToUserId = (value) => ({
  type: SET_FEEDBACK_TO_USERID,
  value,
});
