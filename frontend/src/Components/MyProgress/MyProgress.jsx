import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [dataProgress, setDataProgress] = useState([{ mood: 0, sleep: 0, performance: 0 }]);

  useEffect(() => {
    axios.get('http://localhost:3001/myprogress').then((res) => setDataProgress(res.data));
  }, [dataProgress]);

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

  const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Mood',
        data: labels.map((el, index) => dataProgress[index]?.mood),
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        label: 'Sleep',
        data: labels.map((el, index) => dataProgress[index]?.sleep),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
      {
        label: 'Result Of Day',
        data: labels.map((el, index) => dataProgress[index]?.performance),
        backgroundColor: 'rgba(53, 102, 255, 0.7)',
      },
    ],
  };

  return (
    <div className={style.chart}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default MyProgress;
