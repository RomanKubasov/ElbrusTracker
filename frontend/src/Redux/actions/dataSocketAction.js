/* eslint-disable import/prefer-default-export */
import { GET_DATA_SOCKET } from '../types/types';

export const getDataSocket = (value) => ({
  type: GET_DATA_SOCKET,
  value,
});
