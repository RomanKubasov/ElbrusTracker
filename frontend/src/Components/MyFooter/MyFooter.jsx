import React from 'react';
import style from './MyFooter.module.css';

function MyFooter() {
  return (
    <div className={style.footer}>
      <div className={style.footer__copyright}>
        © 2022 by
        {' '}
        <span>ElbrusTracker</span>
      </div>
    </div>
  );
}

export default MyFooter;
