import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWSContext } from '../Context/Context';
import { getDataSocket } from '../../Redux/actions/dataSocketAction';
import style from './LostButton.module.css';

function LostButton() {
  const dispatch = useDispatch();
  const { socket } = useWSContext();
  const { user, dataSocket } = useSelector((state) => state);
  const [status, setStatus] = useState({ join: true, lost: false });

  function join() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'join' }));
    setStatus({ join: false, lost: true });
  }

  function lost() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'lost' }));
    setStatus({ ...status, lost: false });
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
      {status.join && <button type="button" onClick={() => { join(); }}>Я на лекции</button>}
      {status.lost && <button type="button" onClick={() => { lost(); }}>Я отвалился</button>}
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

export default LostButton;
