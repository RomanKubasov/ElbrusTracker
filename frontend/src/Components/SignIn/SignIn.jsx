import React from 'react';
import style from './SignIn.module.css';

function SignIn() {
  return (
    <form method="post" className={style.form}>
      <div className={style.signin__card}>
        <label className={style.signin__card_label} htmlFor="exampleEmail">Введите Email</label>
        <input className={style.signin__card_input} required="required" type="email" name="email" placeholder="email" />
        <label className={style.signin__card_label} htmlFor="examplePassword">Введите пароль</label>
        <input className={style.signin__card_input} required="required" type="password" name="password" placeholder="password" />
      </div>

      <button className={style.signin__form_button} type="submit">
        Войти
      </button>

    </form>
  );
}

export default SignIn;
