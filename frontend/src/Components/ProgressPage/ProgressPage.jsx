/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  CgSmileNoMouth, CgSmileSad, CgSmileNeutral, CgSmile, CgSmileMouthOpen,
} from 'react-icons/cg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './ProgressPage.module.css';

function ProgressPage() {
  const [mood, setMood] = useState(-1);
  const [sleepValue, setSleepValue] = useState(0);
  const [resValue, setResValue] = useState(1);
  const navigate = useNavigate();
  const currentUser = 'ABessonov';

  async function submitHandler(event) {
    event.preventDefault();
    const response = await axios.post('http://localhost:3001/progress', {
      mood,
      performance: resValue,
      sleep: sleepValue,
      git_login: currentUser,
    });
    navigate('/myprogress');

    return null;
  }

  function moodHandler(index) {
    setMood(index);
  }

  function changeHandler(e) {
    setSleepValue(e.target.value);
  }

  function changeHandlerRes(e) {
    setResValue(e.target.value);
  }

  const array = [style.mouth, style.sad, style.neutral, style.smile, style.mouth_pen];

  return (
    <div className={style.progress}>
      <h2 className={style.progress__title}>Progress Tracker</h2>

      <div className={style.mood}>
        <h3 className={style.mood__title}>Как настроение ?</h3>
        <div className={style.mood__emojis}>

          {array.map((el, index) => {
            switch (index) {
              case 0:
                return (
                  <button
                    key="0"
                    onClick={() => moodHandler(index)}
                    className={mood === index ? `${style.mouth} ${style.yellow}` : style.mouth}
                    type="button"

                  >
                    <CgSmileNoMouth />

                  </button>

                );

              case 1:
                return (
                  <button
                    key="1"
                    onClick={() => moodHandler(index)}
                    className={mood === index ? `${style.sad} ${style.yellow}` : style.sad}
                    type="button"
                  >
                    <CgSmileSad />

                  </button>

                );

              case 2:
                return (
                  <button
                    key="2"
                    onClick={() => moodHandler(index)}
                    className={mood === index ? `${style.neutral} ${style.yellow}` : style.neutral}
                    type="button"
                  >
                    <CgSmileNeutral />

                  </button>

                );

              case 3:
                return (
                  <button
                    key="3"
                    onClick={() => moodHandler(index)}
                    className={mood === index ? `${style.smile} ${style.yellow}` : style.smile}
                    type="button"
                  >
                    <CgSmile />

                  </button>

                );

              case 4:
                return (
                  <button
                    key="4"
                    onClick={() => moodHandler(index)}
                    className={mood === index ? `${style.mouth_pen} ${style.yellow}` : style.mouth_pen}
                    type="button"
                  >
                    <CgSmileMouthOpen />

                  </button>

                );

              default:
                return null;
            }
          })}

        </div>
      </div>

      <div className={style.sleep}>
        <h3 className={style.sleep__title}>Сколько ты спал ?</h3>
        <div className={style.sleep__control_container}>
          <span className={style.sleep__control_container__initialValue}>{sleepValue}</span>
          <input
            className={style.range}
            type="range"
            min={0}
            max={8}
            value={sleepValue}
            onChange={changeHandler}
          />
          <span className={style.sleep__control_container__finallyValue}>8+</span>
        </div>
      </div>

      <div className={style.resultOfDay}>
        <h3 className={style.resultOfDay__title}>Как ты оцениваешь результат сегодняшнего дня ?</h3>
        <div className={style.resultOfDay__control_container}>
          <span className={style.resultOfDay__control_container__initialValue}>{resValue}</span>
          <input
            className={`${style.range} ${style.range__resultOfDay}`}
            type="range"
            min={1}
            max={10}
            value={resValue}
            onChange={changeHandlerRes}
          />
          <span className={style.resultOfDay__control_container__finallyValue}>10</span>
        </div>
      </div>

      <button onClick={submitHandler} className={style.progress__button} type="submit">Отправить</button>

    </div>
  );
}

export default ProgressPage;
