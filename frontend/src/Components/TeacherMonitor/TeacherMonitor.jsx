import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSocket } from '../../Redux/actions/dataSocketAction';
import style from './TeacherMonitor.module.css';

function TeacherMonitor() {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(new WebSocket('ws://localhost:3001'));
  const { user, dataSocket } = useSelector((state) => state);

  function join() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'join' }));
  }

  function lost() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'lost' }));
  }

  console.log('SOCKET--->', socket);
  socket.onmessage = (event) => {
    console.log('SOCKET-WE-ARE_HERE');
    dispatch(getDataSocket(JSON.parse(event.data)));
  };

  return (
    <div className={style.teacher__container}>
      <button className={style.teacher__buttonLection} type="button" onClick={() => { join(); }}>Я на лекции!</button>
      <button className={style.teacher__buttonFell} type="button" onClick={() => { lost(); }}>Я отвалился!</button>
      {dataSocket.message && (
      <>
        <div>
          Присоединилось:
          {dataSocket.students}
        </div>
        <div>
          Отвалилось:
          {dataSocket.lostStudents}
        </div>
        <div>{dataSocket.message}</div>
      </>
      )}
    </div>
  );
}

export default TeacherMonitor;
