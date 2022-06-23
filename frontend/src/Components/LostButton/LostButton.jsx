import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import {
  BiLike,
} from 'react-icons/bi';
import { Doughnut } from 'react-chartjs-2';
import { getDataSocket } from '../../Redux/actions/dataSocketAction';
import { useWSContext } from '../Context/Context';
import { setIsLoading } from '../../Redux/actions/isLoadingAction';
import style from './LostButton.module.css';
import Spinner from '../Spinner/Spinner';

ChartJS.register(ArcElement, Tooltip, Legend);

function LostButton() {
  const dispatch = useDispatch();
  const { socket } = useWSContext();
  const { user, dataSocket, isLoading } = useSelector((state) => state);
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
    dispatch(getDataSocket(JSON.parse(event.data)));
  };

  const data = {
    labels: ['Присоединилось', 'Отвалилось'],
    datasets: [
      {
        label: '# of Votes',
        data: [
          dataSocket.students - dataSocket.lostStudents,
          dataSocket.lostStudents,
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 99, 132, 0.7)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    dispatch(setIsLoading({ ...isLoading, status: true }));
    setTimeout(() => dispatch(setIsLoading({ ...isLoading, status: false })), 2000);
  }, []);

  return (
      (isLoading.status) ? (<Spinner />) : (
     <>
      <div className={style.lostButton__container}>
        {status.join && <button className={style.lostButton__lection} type="button" onClick={() => { join(); }}>Я на лекции</button>}
        {status.lost && <button className={style.lostButton__fell} type="button" onClick={() => { lost(); }}>Я отвалился</button>}
      </div>

        <div>{dataSocket.message}</div>

        {!dataSocket.students ? (<div>Пока никто не присоединился</div>) : (
          <div className={style.chart}>
            <Doughnut data={data} />
          </div>
        )}

        <button
          className={style.button__likes}
          type="button"
          onClick={() => { like(); }}
        >
          <BiLike />
        </button>
      </>
    )
  );
}

export default LostButton;
