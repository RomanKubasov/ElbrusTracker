/* eslint-disable import/prefer-default-export */
import {
  FEEDBACK_SHOW_MESSAGE,
} from '../types/types';

export const showMessage = (value) => ({
  type: FEEDBACK_SHOW_MESSAGE,
  value,
});
