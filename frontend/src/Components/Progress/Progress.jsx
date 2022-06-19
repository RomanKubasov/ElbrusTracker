/* eslint-disable camelcase */
import React from 'react';
// import axios from 'axios';

function Progress() {
  // function submitHandler(event) {
  //   event.preventDefault();
  //   const {
  //     mood, performance, sleep, git_login,
  //   } = event.target;
  //   axios.post('http://localhost:3001/progress', {
  //     mood: mood.value,
  //     performance: performance.value,
  //     sleep: sleep.value,
  //     git_login: git_login.value,
  //   }).then((res) => console.log(res));
  // }
  return (
    <>
      <div>Progress (you can send your progress here)</div>
      {/* <form onSubmit={submitHandler}>
        <input type="text" name="mood" placeholder="mood" />
        <input type="text" name="performance" placeholder="performance" />
        <input type="text" name="sleep" placeholder="sleep" />
        <input type="text" name="git_login" placeholder="git_login" />
        <button type="submit">Button</button>
      </form> */}
    </>

  );
}

export default Progress;
