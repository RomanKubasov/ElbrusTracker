import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsLoading } from '../../Redux/actions/isLoadingAction';
import style from './MainPage.module.css';
import Spinner from '../Spinner/Spinner';
import StartPage from '../StartPage/StartPage';

function MainPage() {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setIsLoading({ ...isLoading, status: true }));
    setTimeout(() => dispatch(setIsLoading({ ...isLoading, status: false })), 2000);
  }, []);

  return (
    <>
      {!isLoading.status && !user.login && (<StartPage />)}
      {isLoading.status && !user.login && (<Spinner />)}
      <div className={style.mainPage}>
        {(user.role_id === 2) && (
        <>
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
                <img src="images/rating2.svg" alt="Feedback_Image" />
              </div>
            </Link>
            <div className={style.mainPage__card_feedback_info}>
              <p>Обратная связь</p>
            </div>
          </div>
        </>
        )}

        {(user.role_id) && (
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
        )}

      </div>
    </>
  );
}

export default MainPage;
