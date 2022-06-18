import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './MyNav.module.css';

const Img = 'images/ElbrusBootcamp.jpg';

function MyNav() {
  const navigate = useNavigate();
  const navigateHandlerReg = () => {
    navigate('/signup');
  };

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
        <button onClick={navigateHandlerReg} className={style.registration__signupBtn} type="submit">Зарегистрироваться</button>
        <button onClick={navigateHandlerLog} className={style.registration__signinBtn} type="submit">Войти</button>
      </div>
    </div>
  );
}

export default MyNav;
