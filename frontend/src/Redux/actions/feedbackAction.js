/* eslint-disable import/prefer-default-export */
import {
  SEND_FEEDBACK,
} from '../types/types';

export const sendFeedBack = (value) => ({
  type: SEND_FEEDBACK,
  value,
});
