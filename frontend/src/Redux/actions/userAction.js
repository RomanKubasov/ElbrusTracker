import axios from 'axios';
import { SET_USER } from '../types/types';

export const setUser = (value) => ({
  type: SET_USER,
  value,
});

export const checkUser = () => (dispatch) => {
  axios.post(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/user/check`)
    .then((response) => dispatch(setUser(response.data)))
    .catch((err) => dispatch(setUser({})));
};

export const userLogOut = () => (dispatch) => {
  axios(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/user/logout`)
    .then((res) => dispatch(setUser({})));
};

export const userLogIn = (value) => (dispatch) => {
  axios.post(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/user/login`, value)
    .then((res) => dispatch(setUser(res.data)));
};

export const userGitLogIn = (value) => (dispatch) => {
  axios.post(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/user/authenticate`, value)
    .then((res) => { dispatch(setUser(res.data)); });
};
