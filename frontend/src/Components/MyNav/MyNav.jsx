import React from 'react';
import Img from '../../images/tracker_logo.png';
import style from './MyNav.module.css';

function MyNav() {
  return (
    <div className={style.header}>
      <div className={style.header__logo}>
        <img src={Img} alt="logo" />
      </div>

      <div className={style.registration}>
        <button className={style.registration__signupBtn} type="submit">Зарегистрироваться</button>
        <button className={style.registration__signinBtn} type="submit">Войти</button>
      </div>
    </div>
  );
}

export default MyNav;
