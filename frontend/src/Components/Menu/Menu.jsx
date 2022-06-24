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
              <Link to="/progress" className={style.menu__link}>Progress</Link>
            </li>
            <li className={style.menu__item}>
              <Link to="/myprogress" className={style.menu__link}>My progress</Link>
            </li>
            <li className={style.menu__item}>
              <Link to="/feedback" className={style.menu__link}>Feedback</Link>
            </li>
            <li className={style.menu__item}>
              <Link to="/myfeedback" className={style.menu__link}>My feedback</Link>
            </li>
          </>
          )}
          {(user.role_id === 1) && (
          <li className={style.menu__item}>
            <Link to="/randomizer" className={style.menu__link}>Randomizer</Link>
          </li>
          )}
          <li className={style.menu__item}>
            <Link to="/lostbutton" className={style.menu__link}>Lost button</Link>
          </li>
        </ul>
      )}
    </div>

  );
}

export default Menu;
