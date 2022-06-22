import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSocket } from '../../Redux/actions/dataSocketAction';
import style from './TeacherMonitor.module.css';

function TeacherMonitor() {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(new WebSocket(`${process.env.REACT_APP_SOCKET_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}`));
  const { user, dataSocket } = useSelector((state) => state);

  function join() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'join' }));
  }

  function lost() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'lost' }));
  }

  socket.onmessage = (event) => {
    console.log('DATA--->', JSON.parse(event.data));
    dispatch(getDataSocket(JSON.parse(event.data)));
  };

  return (
    <div className={style.teacher__container}>
      <button className={style.teacher__buttonLection} type="button" onClick={() => { join(); }}>Я на лекции!</button>
      <button className={style.teacher__buttonFell} type="button" onClick={() => { lost(); }}>Я отвалился!</button>
    </div>
  );
}

export default TeacherMonitor;
