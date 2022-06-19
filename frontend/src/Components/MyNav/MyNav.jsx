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

  const navigateHandlerLog = () => {
    navigate('/signin');
  };

  return (
    <div className={style.header}>
      <div className={style.header__logo}>
        <Link to="/">
          <img src={Img} alt="logo" />
        </Link>
      </div>

      <div className={style.registration}>
        {user.login && (<button onClick={logOutHAndler} className={style.registration__signinBtn} type="submit">Выйти</button>)}
        {!user.login && (<button onClick={navigateHandlerLog} className={style.registration__signinBtn} type="submit">Войти</button>)}
      </div>
    </div>
  );
}

export default MyNav;
