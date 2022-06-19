import axios from 'axios';
import { SET_USER } from '../types/types';

export const setUser = (value) => ({
  type: SET_USER,
  value,
});

export const checkUser = () => (dispatch) => {
  axios.post('http://localhost:3001/user/check')
    .then((response) => dispatch(setUser(response.data)))
    .catch((err) => dispatch(setUser({})));
};

export const userLogOut = () => (dispatch) => {
  axios('http://localhost:3001/user/logout')
    .then((res) => dispatch(setUser({})));
};

export const userLogIn = (value) => (dispatch) => {
  axios.post('http://localhost:3001/user/login', value)
    .then((res) => dispatch(setUser(res.data)));
};
