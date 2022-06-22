import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWSContext } from '../Context/Context';
import { getDataSocket } from '../../Redux/actions/dataSocketAction';
import style from './TeacherMonitor.module.css';

function TeacherMonitor() {
  const dispatch = useDispatch();
  const { socket } = useWSContext();
  const { user, dataSocket } = useSelector((state) => state);

  function join() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'join' }));
  }

  function lost() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'lost' }));
  }

  function like() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'like' }));
  }

  socket.onmessage = (event) => {
    console.log('DATA--->', JSON.parse(event.data));
    dispatch(getDataSocket(JSON.parse(event.data)));
  };

  return (
    <>
      <button type="button" onClick={() => { join(); }}>Я на лекции</button>
      <button type="button" onClick={() => { lost(); }}>Я отвалился</button>
      <button type="button" onClick={() => { like(); }}>Like</button>
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
        <div>
          Likes:
          {dataSocket.likes}
        </div>
        <div>{dataSocket.message}</div>
      </>
      )}
    </>
  );
}

export default TeacherMonitor;
