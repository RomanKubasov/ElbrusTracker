import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogOut } from '../../Redux/actions/userAction';
import style from './MyNav.module.css';

const Img = 'images/ElbrusBootcamp.jpg';

function MyNav() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const logOutHAndler = () => {
    dispatch(userLogOut());
  };

  const navigate = useNavigate();

  const navigateHandlerLogGit = () => {
    navigate('/login');
  };

  const navigateHandlerLog = () => {
    navigate('/loginwithpass');
  };

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
        {!user.login && (<button onClick={navigateHandlerLogGit} className={style.registration__signinBtn} type="submit">Login with GitHub</button>)}
        {' '}
        {!user.login && (<button onClick={navigateHandlerLog} className={style.registration__signinBtn} type="submit">Login</button>)}
      </div>
    </div>
  );
}

export default MyNav;
