import {
  GET_TEAMMATES, REQUEST_TEAMMATES,
} from '../types/types';

export const getTeamMates = (value) => ({
  type: GET_TEAMMATES,
  value,
});

export const requestTeamMates = (value) => ({
  type: REQUEST_TEAMMATES,
  value,
});
