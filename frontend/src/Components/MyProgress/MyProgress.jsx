import React, { useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import style from './MyProgress.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function MyProgress() {
  const data = {
    labels: ['Настроение', 'Сон', 'Результат дня'],
    datasets: [
      {
        label: '# of Votes',
        data: [7, 5, 2],
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
