import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSocket } from '../../Redux/actions/dataSocketAction';

function TeacherMonitor() {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(new WebSocket('ws://localhost:3001'));
  const [display, setDisplay] = useState(true);
  const { user, dataSocket } = useSelector((state) => state);

  function lost() {
    socket.send(JSON.stringify({ fromUser: user.name, data: 'lost' }));
  }

  socket.onmessage = (event) => {
    dispatch(getDataSocket(JSON.parse(event.data)));
  };

  return (
    <>
      <button type="button" onClick={() => { lost(); setDisplay(false); }}>Я отвалился</button>
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
    </>
  );
}

export default TeacherMonitor;
