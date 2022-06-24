/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogOut, userGitLogIn } from '../../Redux/actions/userAction';
import { setIsLoading } from '../../Redux/actions/isLoadingAction';
import style from './MyNav.module.css';

const Img = 'images/ElbrusBootcamp.jpg';

function MyNav() {
  const { user, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const logOutHAndler = () => {
    dispatch(userLogOut());
  };

  const navigate = useNavigate();

  const navigateHandlerLog = () => {
    navigate('/loginwithpass');
  };

  /* login with GitHub */
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes('?code=');

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split('?code=');
      window.history.pushState({}, null, newUrl[0]);

      const requestData = { code: newUrl[1] };

      // Use code parameter and other parameters to make POST request to proxy_server
      try {
        dispatch(userGitLogIn(requestData));
      } catch (err) {
        dispatch(setIsLoading({ status: false, errorMessage: 'Sorry! Login failed' }));
      }
    }
  }, [dispatch, isLoading]);
  /* End of login with GitHub */

  return (
    <div className={style.header}>
      <div className={style.header__logo}>
        <Link to="/">
          <img src={Img} alt="logo" />
        </Link>
      </div>

      <div className={style.registration}>
        {user.login && (
          <div className={style.welcome}>
            <div className={style.welcometext}>
              <span>
                Привет
                {' '}
                {user.name}
                {' '}
              </span>
              <span>
                Тебе доступны группы:
                {' '}
                {user.userStudents.map((el) => (<div key={el.id}>{el.name}</div>))}
                {user.userTeachers.map((el) => (<div key={el.id}>{el.name}</div>))}
              </span>
            </div>
            <img className={style.photo} src={user.avatar_url} alt="..." />
            <button onClick={logOutHAndler} className={style.registration__signinBtn} type="submit">Logout</button>
          </div>
        )}
        {!user.login && (
          <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}>
            <button
              onClick={() => { dispatch(setIsLoading({ ...isLoading, status: true })); }}
              className={style.registration__signinBtn}
              type="submit"
            >
              Login with GitHub

            </button>
          </a>
        )}
        {' '}
        {!user.login && (<button onClick={() => { navigateHandlerLog(); }} className={style.registration__signinBtn} type="submit">Login</button>)}
      </div>
    </div>
  );
}

export default MyNav;
