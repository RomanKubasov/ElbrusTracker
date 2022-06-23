import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import {
  BiLike,
} from 'react-icons/bi';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import style from './LostButton.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function LostButton() {
  const [dataProgress, setDataProgress] = useState([{ mood: -1, sleep: -1, performance: -1 }]);

  useEffect(() => {
    axios.get('http://localhost:3001/myprogress').then((res) => setDataProgress(res.data));
  }, []);

  const data = {
    labels: ['Присоединилось', 'Отвалилось'],
    datasets: [
      {
        label: '# of Votes',
        data: [
          dataProgress[dataProgress.length - 1].mood,
          dataProgress[dataProgress.length - 1].sleep,
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

  return (
    <>
      <div className={style.chart}>
        <Doughnut data={data} />
      </div>
      <button className={style.button__likes} type="button">
        <BiLike />
      </button>
    </>
  );
}

export default LostButton;
