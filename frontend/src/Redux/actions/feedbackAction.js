/* eslint-disable import/prefer-default-export */
import {
  SEND_FEEDBACK,
  CLEAR_FEEDBACK,
  DELETE_FEEDBACK,
} from '../types/types';

export const sendFeedBack = (value) => ({
  type: SEND_FEEDBACK,
  value,
});

export const clearFeedBack = () => ({
  type: CLEAR_FEEDBACK,
});

export const deleteFeedBack = (value) => ({
  type: DELETE_FEEDBACK,
  value,
});
