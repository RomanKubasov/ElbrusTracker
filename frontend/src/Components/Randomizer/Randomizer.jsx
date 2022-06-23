/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Randomizer() {
  const { user } = useSelector((state) => state);
  const [randomizeNumber, setRandomizeNumber] = useState(0);

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
      const response = await axios.post(
        `${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/randomizer`,
        { group: randomizeGroupName, count: randomizeNumber },
      );
      console.log(response.data);
    } else {
      alert('Неверно задано число человек в команде');
    }
  }

  return (
    <>
      <div>Randomizer (you can generate random teams of students here)</div>
      <div>Укажите группу</div>
      <select onChange={selectHandler}>
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
      <div>Введите количество человек в одной команде</div>
      <input onChange={inputHandler} />
      <button type="button" onClick={submitHandler}>Generate</button>
    </>

  );
}

export default Randomizer;
