import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Menu.module.css';

function Menu() {
  const { user } = useSelector((state) => state);
  return (
    <div className={style.menu__container}>
      {(user.role_id) && (
        <ul className={style.menu__list}>
          {(user.role_id === 2) && (
          <>
            <li className={style.menu__item}>
              <Link to="/progress" className={style.menu__link}>Прогресс</Link>
            </li>
            <li className={style.menu__item}>
              <Link to="/myprogress" className={style.menu__link}>Мой прогресс</Link>
            </li>
            <li className={style.menu__item}>
              <Link to="/feedback" className={style.menu__link}>Фидбек</Link>
            </li>
            <li className={style.menu__item}>
              <Link to="/myfeedback" className={style.menu__link}>Мой фидбек</Link>
            </li>
          </>
          )}
          {(user.role_id === 1) && (
          <li className={style.menu__item}>
            <Link to="/randomizer" className={style.menu__link}>Рандомайзер</Link>
          </li>
          )}
          <li className={style.menu__item}>
            <Link to="/lostbutton" className={style.menu__link}>Я на лекции</Link>
          </li>
        </ul>
      )}
    </div>

  );
}

export default Menu;
