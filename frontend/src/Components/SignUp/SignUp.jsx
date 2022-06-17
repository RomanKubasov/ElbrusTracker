import React from 'react';
import style from './SignUp.module.css';

function SignUp() {
  return (
    <form method="post" className={style.form}>
      <div className={style.signup__card}>
        <input className={style.signup__card_input} required="required" type="text" name="name" placeholder="Введите имя" />
        <input className={style.signup__card_input} required="required" type="email" name="email" placeholder="Введите email" />
        <input className={style.signup__card_input} required="required" type="password" name="password" placeholder="Введите пароль" />
      </div>

      <button className={style.signup__form_button} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}

export default SignUp;
