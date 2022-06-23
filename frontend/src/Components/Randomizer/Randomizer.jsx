// import React from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// function Randomizer() {
//   const { user } = useSelector((state) => state);
//   async function inputHandler(e) {
//     const val = e.target.value;
//     if (!isNaN(val) && parseInt(Number(val)) == val && !isNaN(parseInt(val, 10))){

//     }
//   }

//   return (
//     <>
//       <div>Randomizer (you can generate random teams of students here)</div>
//       <div>Укажите группу</div>
//       <select onChange={selectHandler} value={groupValue}>
//         {user.userTeachers.map((el) => <option>{el.name}</option>)}
//       </select>
//       <div>Введите количество человек в одной команде</div>
//       <input onChange={inputHandler} />
//       <button type="button" onClick={submitHandler}>Generate</button>
//     </>

// );
// }

// export default Randomizer;

// .post(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/randomizer`
