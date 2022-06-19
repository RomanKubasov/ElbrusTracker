/* eslint-disable camelcase */
import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import {
  CgSmileNoMouth, CgSmileSad, CgSmileNeutral, CgSmile, CgSmileMouthOpen,
} from 'react-icons/cg';
import axios from 'axios';
import style from './ProgressPage.module.css';

function ProgressPage() {
  const [mood, setMood] = useState('3');
  const [sleepValue, setSleepValue] = useState(0);
  const [resValue, setResValue] = useState(1);

  const currentUser = 'ABessonov';

  function submitHandler(event) {
    event.preventDefault();

    axios.post('http://localhost:3001/progress', {
      mood,
      performance: resValue,
      sleep: sleepValue,
      git_login: currentUser,
    }).then((res) => console.log(res));
  }

  function moodHandler(e) {
    e.preventDefault();
    console.log(e.target);
    setMood(e.target.id);
  }

  function changeHandler(e) {
    setSleepValue(e.target.value);
  }

  function changeHandlerRes(e) {
    setResValue(e.target.value);
  }

  return (
    <div className={style.progress}>
      <h2 className={style.progress__title}>Progress Tracker</h2>

      <div className={style.mood}>
        <h3 className={style.mood__title}>Как настроение ?</h3>
        <div className={style.mood__emojis}>
          <button onClick={moodHandler} id="1" type="button">
            <CgSmileNoMouth className={style.mouth} />
          </button>

          <button onClick={moodHandler} id="2" type="button">
            <CgSmileSad className={style.sad} />
          </button>
          <button onClick={moodHandler} id="3" type="button">
            <CgSmileNeutral className={style.neutral} />
          </button>
          <button onClick={moodHandler} id="4" type="button">
            <CgSmile className={style.smile} />
          </button>
          <button onClick={moodHandler} id="5" type="button">
            <CgSmileMouthOpen className={style.mouth_pen} />
          </button>
        </div>
      </div>

      <div className={style.sleep}>
        <h3 className={style.sleep__title}>Сколько ты спал ?</h3>
        <div className={style.sleep__control_container}>
          <span>{sleepValue}</span>
          <input
            className={style.range}
            type="range"
            min={0}
            max={8}
            value={sleepValue}
            onChange={changeHandler}
          />
          <span>8+</span>
        </div>
      </div>

      <div className={style.resultOfDay}>
        <h3 className={style.resultOfDay__title}>Как ты оцениваешь результат сегодняшнего дня ?</h3>
        <div className={style.resultOfDay__control_container}>
          <span>{resValue}</span>
          <input
            className={`${style.range} ${style.range__resultOfDay}`}
            type="range"
            min={1}
            max={10}
            value={resValue}
            onChange={changeHandlerRes}
          />
          <span>10</span>
        </div>
      </div>

      <button onClick={submitHandler} className={style.progress__button} type="submit">Отправить</button>

    </div>
  );
}

export default ProgressPage;
