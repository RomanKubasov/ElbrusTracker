import React from 'react';
import style from './MainPage.module.css';
import Img from '../../images/progress_img.jpg';

function MainPage() {
  return (
    <div className={style.mainPage}>

      <div className={style.mainPage__card_progress}>
        <div className={style.mainPage__card_progress_inner}>
          <div className={style.mainPage__card_progress_img}>
            <img src={Img} alt="Progress_Image" />
          </div>
        </div>
        <div className={style.mainPage__card_progress_info}>
          <p>Мой прогресс</p>
        </div>
      </div>

      <div className={style.mainPage__card_feedback}>
        <div>
          <img src="" alt="Feedback_Image" />
        </div>
        <div>
          <p>Обратная связь</p>
        </div>
      </div>

    </div>
  );
}

export default MainPage;

// <p>
//   Сколько ты спал:
//   {' '}
//   <input type="range" min="0" max="10" id="size" onInput="sizePic()" value="0" />
// </p>;
