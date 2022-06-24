/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import style from './Randomizer.module.css';

function Randomizer() {
  const { user } = useSelector((state) => state);
  const [randomizeNumber, setRandomizeNumber] = useState(0);
  const [randomizerMessage, setRandomizerMessage] = useState(false);
  const [randomizeGroupName, setRandomizeGroupName] = useState('');
  let userCheck = false;

  useEffect(() => {
    try {
      if (user.userTeachers[0].name) {
        userCheck = true;
        setRandomizeGroupName(user.userTeachers[0].name);
      }
    } catch (err) {
      userCheck = false;
    }
  }, [user]);

  async function inputHandler(e) {
    setRandomizeNumber(e.target.value);
  }
  async function selectHandler(e) {
    setRandomizeGroupName(e.target.value);
    console.log(randomizeGroupName);
  }
  async function submitHandler() {
    if (!isNaN(randomizeNumber)
      && parseInt(Number(randomizeNumber), 10) == randomizeNumber
      && !isNaN(parseInt(randomizeNumber, 10)) && randomizeNumber > 1) {
      setRandomizerMessage(false);
      const response = await axios.post(
        `${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/randomizer`,
        { group: randomizeGroupName, count: randomizeNumber },
      );
      console.log(response.data);
      setRandomizerMessage(true);
    } else {
      alert('Неверно задано число человек в команде');
    }
  }

  return (
    (user.userTeachers)
      ? (
        <>
          <div className={style.randomizer__container}>
            <div className={style.randomizer__title}>
              <span>Рандомайзер</span>
              {' '}
              (
              <i>здесь вы можете создавать случайные команды студентов</i>
              )
            </div>
            <div className={style.randomizer__group}>Укажите группу</div>
            <select className={style.randomizer__select} onChange={selectHandler}>
              {randomizeGroupName
                ? user.userTeachers.map((el, index) => (
                  <option
                    value={el.name}
                    key={index}
                  >
                    {el.name}
                  </option>
                ))
                : null}
            </select>
            <div className={style.randomizer__countTeam}>
              Введите количество человек в одной команде
            </div>
            <input className={style.randomizer__input} onChange={inputHandler} />
            <button className={style.randomizer__button} type="button" onClick={submitHandler}>Generate</button>
          </div>
          {randomizerMessage ? (
            <div className={style.randomizer__slack}>
              Команды сформированы и отправлены в Slack!
            </div>
          ) : null}
        </>
      ) : <div className={style.randomizer__slack}>Авторизуйтесь, чтобы получить доступ</div>

  );
}

export default Randomizer;
