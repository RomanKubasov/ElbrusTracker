import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './MainPage.module.css';
import Spinner from '../Spinner/Spinner';

function MainPage() {
  const { isLoading, user } = useSelector((state) => state);

  return (
    <>
      {isLoading.status && !user.login && (<Spinner />)}
      <div className={style.mainPage}>

        <div className={style.mainPage__card_progress}>
          <Link to="/progress" className={style.mainPage__card_progress_inner}>
            <div className={style.mainPage__card_progress_img}>
              <img src="images/progress.svg" alt="Progress_Image" />
            </div>
          </Link>
          <div className={style.mainPage__card_progress_info}>
            <p>Мой прогресс</p>
          </div>
        </div>

        <div className={style.mainPage__card_feedback}>
          <Link to="/feedback" className={style.mainPage__card_feedback_inner}>
            <div className={style.mainPage__card_feedback_img}>
              <img src="images/rating1.svg" alt="Feedback_Image" />
            </div>
          </Link>
          <div className={style.mainPage__card_feedback_info}>
            <p>Обратная связь</p>
          </div>
        </div>

        <div className={style.mainPage__card_feedback}>
          <Link to="/lostbutton" className={style.mainPage__card_feedback_inner}>
            <div className={style.mainPage__card_feedback_img}>
              <img src="images/lection.svg" alt="Feedback_Image" />
            </div>
          </Link>
          <div className={style.mainPage__card_feedback_info}>
            <p>Я на лекции</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default MainPage;
