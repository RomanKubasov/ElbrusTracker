import React from 'react';
import style from './Spinner.module.css';
import spinner from '../../images/spinner.gif';

function Spinner() {
  return (
    <div className={style.spinner}>
      <img src={spinner} alt="Spinner__Gif" />
    </div>
  );
}

export default Spinner;
