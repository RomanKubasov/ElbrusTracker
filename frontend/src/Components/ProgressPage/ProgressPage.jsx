import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import {
  CgSmileNoMouth, CgSmileSad, CgSmileNeutral, CgSmile, CgSmileMouthOpen,
} from 'react-icons/cg';
import style from './ProgressPage.module.css';

function ProgressPage() {
  const [value, setValue] = useState(0);
  // const [numValue, setNumValue] = useState(0);

  return (
    <div className={style.progress}>
      <h2 className={style.progress__title}>Progress Tracker</h2>

      <div className={style.mood}>
        <h3 className={style.mood__title}>Как настроение ?</h3>
        <div className={style.mood__emojis}>
          <button type="button">
            <CgSmileNoMouth className={style.mouth} />
          </button>
          <button type="button">
            <CgSmileSad className={style.sad} />
          </button>
          <button type="button">
            <CgSmileNeutral className={style.neutral} />
          </button>
          <button type="button">
            <CgSmile className={style.smile} />
          </button>
          <button type="button">
            <CgSmileMouthOpen className={style.mouth_pen} />
          </button>
        </div>
      </div>

      <div className={style.sleep}>
        <h3 className={style.sleep__title}>Сколько ты спал ?</h3>
        <div className={style.sleep__control_container}>
          <span>0</span>
          <input
            className={style.range}
            type="range"
            min={0}
            max={8}
            value={value}
            onChange={() => setValue()}
          />
          <span>8+</span>
        </div>
      </div>

      <div className={style.resultOfDay}>
        <h3 className={style.resultOfDay__title}>Как ты оцениваешь результат сегодняшнего дня ?</h3>
        <div className={style.resultOfDay__control_container}>
          <span>1</span>
          <input
            className={`${style.range} ${style.range__resultOfDay}`}
            type="range"
            min={1}
            max={10}
            value={value}
            onChange={() => setValue()}
          />
          <span>10</span>
        </div>
      </div>

      <button className={style.progress__button} type="submit">Отправить</button>

    </div>
  );
}

export default ProgressPage;
