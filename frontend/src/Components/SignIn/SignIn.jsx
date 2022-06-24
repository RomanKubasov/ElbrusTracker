import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './SignIn.module.css';
import { userLogIn } from '../../Redux/actions/userAction';

export default function SignIn() {
  const { user } = useSelector((state) => state);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  if (user.id) {
    navigate('/');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogIn(inputs));
    setInputs({});
  };

  return (
    <form method="post" className={style.form} onSubmit={submitHandler}>
      <div className={style.signin__card}>
        <label className={style.signin__card_label} htmlFor="exampleLogin">Enter Login</label>
        <input
          className={style.signin__card_input}
          required="required"
          type="login"
          name="login"
          placeholder="login"
          value={inputs.login || ''}
          onChange={inputHandler}
        />
        <label className={style.signin__card_label} htmlFor="examplePassword">Enter password</label>
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
        Login
      </button>

    </form>
  );
}
