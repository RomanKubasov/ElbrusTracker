import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import style from './MyProgress.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function MyProgress() {
  const [dataProgress, setDataProgress] = useState([{ mood: -1, sleep: -1, performance: -1 }]);

  useEffect(() => {
    axios.get('http://localhost:3001/myprogress').then((res) => setDataProgress(res.data));
  }, []);
  // console.log(dataProgress[dataProgress.length - 1].mood);
  // console.log(dataProgress[dataProgress.length - 1].sleep);
  // console.log(dataProgress[dataProgress.length - 1].performance);

  const data = {
    labels: ['Настроение', 'Сон', 'Результат дня'],
    datasets: [
      {
        label: '# of Votes',
        data: [
          dataProgress[dataProgress.length - 1].mood,
          dataProgress[dataProgress.length - 1].sleep,
          dataProgress[dataProgress.length - 1].performance,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={style.chart}>
      <Doughnut data={data} />
    </div>
  );
}

export default MyProgress;
