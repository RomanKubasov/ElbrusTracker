import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSocket } from '../../Redux/actions/dataSocketAction';
import style from './MainPage.module.css';
import imgProgress from '../../images/progress_img.jpg';
import imgFeedback from '../../images/feedback.jpg';

function MainPage() {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(new WebSocket('ws://localhost:3001'));
  const { user } = useSelector((state) => state);

  function join() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'join' }));
  }

  socket.onmessage = (event) => {
    dispatch(getDataSocket(JSON.parse(event.data)));
  };

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
        <Link to="/teachermonitor" onClick={() => join()} className={style.mainPage__card_feedback_inner}>
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
