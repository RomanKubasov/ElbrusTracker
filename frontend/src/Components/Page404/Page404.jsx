import React from 'react';
import style from './Page404.module.css';

function Page404() {
  return (
    <div className={style.container}>
      <div className={style.messagebox}>
        <div className={style.title}>Ошибка 404:</div>
        <div className={style.subtitle}>Это не та страница, которую вы ищете!</div>
        <a href="/">Вернуться на главную</a>
      </div>
      <img className={style.imagebox} src="/images/404.jpg" alt="404" />
    </div>
  );
}

export default Page404;
