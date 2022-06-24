import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import style from './MyProgress.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function MyProgress() {
  const { user } = useSelector((state) => state);
  const { id } = user;
  const [dataProgress, setDataProgress] = useState([{ mood: 0, sleep: 0, performance: 0 }]);
  const [messageArr, setMessagesArr] = useState([]);

  useEffect(() => {
    try {
      if (user.id) {
        axios.post(`${process.env.REACT_APP_PROXY_URL}:${process.env.REACT_APP_SERVER_PORT}/myprogress`, { id }).then((res) => {
          setDataProgress(res.data[0]);
          setMessagesArr([res.data[1], res.data[2], res.data[3], res.data[4], res.data[5]]);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Показатели:',
      },
    },
  };

  const labels = dataProgress.map((el) => el.date);

  const data = {
    labels,
    datasets: [
      {
        label: 'Настроение',
        data: labels.map((el, index) => dataProgress[index]?.mood),
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        label: 'Сон',
        data: labels.map((el, index) => dataProgress[index]?.sleep),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
      {
        label: 'Прогресс',
        data: labels.map((el, index) => dataProgress[index]?.performance),
        backgroundColor: 'rgba(53, 102, 255, 0.7)',
      },
    ],
  };
  return (
    <>
      <div className={style.chart}>
        <Bar options={options} data={data} />
      </div>
      <div>
        Среднее время сна
        {' '}
        {messageArr[4] ? messageArr[4] : null}
      </div>
      <div>{messageArr[0] ? messageArr[0] : null}</div>
      <div>
        Ваш средний прогресс
        {' '}
        {messageArr[3] ? messageArr[3] : null}
      </div>
      <div>
        Средний прогресс группы
        {' '}
        {messageArr[2] ? messageArr[2] : null}
      </div>
      <div>{messageArr[1] ? messageArr[1] : null}</div>

    </>
  );
}

export default MyProgress;
