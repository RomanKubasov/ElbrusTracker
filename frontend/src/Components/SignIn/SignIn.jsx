import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './SignIn.module.css';
import { userLogIn } from '../../Redux/actions/userAction';

export default function SignIn() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogIn(inputs));
    setInputs({});
  };

  return (
    <form method="post" className={style.form} onSubmit={submitHandler}>
      <div className={style.signin__card}>
        <label className={style.signin__card_label} htmlFor="exampleLogin">Введите Login</label>
        <input
          className={style.signin__card_input}
          required="required"
          type="login"
          name="login"
          placeholder="login"
          value={inputs.login || ''}
          onChange={inputHandler}
        />
        <label className={style.signin__card_label} htmlFor="examplePassword">Введите пароль</label>
        <input
          className={style.signin__card_input}
          required="required"
          type="pass"
          name="pass"
          placeholder="pass"
          value={inputs.pass || ''}
          onChange={inputHandler}
        />
      </div>

      <button className={style.signin__form_button} type="submit">
        Войти
      </button>

    </form>
  );
}
