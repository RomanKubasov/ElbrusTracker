import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './MainPage.module.css';
import imgProgress from '../../images/progress_img.jpg';
import imgFeedback from '../../images/feedback.jpg';

function MainPage() {
  return (
    <div className={style.mainPage}>

      <div className={style.mainPage__card_progress}>
        <Link to="/progress" className={style.mainPage__card_progress_inner}>
          <div className={style.mainPage__card_progress_img}>
            <img src={imgProgress} alt="Progress_Image" />
          </div>
        </Link>
        <div className={style.mainPage__card_progress_info}>
          <p>Мой прогресс</p>
        </div>
      </div>

      <div className={style.mainPage__card_feedback}>
        <Link to="/feedback" className={style.mainPage__card_feedback_inner}>
          <div className={style.mainPage__card_feedback_img}>
            <img src={imgFeedback} alt="Feedback_Image" />
          </div>
        </Link>
        <div className={style.mainPage__card_feedback_info}>
          <p>Обратная связь</p>
        </div>
      </div>

      <div className={style.mainPage__card_feedback}>
        <Link to="/teachermonitor" className={style.mainPage__card_feedback_inner}>
          <div className={style.mainPage__card_feedback_img}>
            <img src={imgFeedback} alt="Feedback_Image" />
          </div>
        </Link>
        <div className={style.mainPage__card_feedback_info}>
          <p>Я на лекции</p>
        </div>
      </div>

    </div>
  );
}

export default MainPage;
