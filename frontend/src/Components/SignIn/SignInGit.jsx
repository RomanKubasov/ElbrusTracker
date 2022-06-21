/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userGitLogIn } from '../../Redux/actions/userAction';

export default function SignInGit() {
  const dispatch = useDispatch();
  const client_id = process.env.REACT_APP_CLIENT_ID ?? '58ed0551023e8ee6b590';
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI ?? 'http://localhost:3000/login';

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
      dispatch(userGitLogIn(requestData));
    }
  }, [dispatch]);

  return (
    <div>
      <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}>
        <span>Login with GitHub</span>
      </a>
    </div>
  );
}
