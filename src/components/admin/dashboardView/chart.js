import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = () => {
  const labels = getLastYearMonths();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Anual Orders',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Orders',
        data: [1,2,5,1,3,4,3,4.5,2,4,3,2],
        borderColor: 'rgba(107,70,193,0.5)',
        backgroundColor: '#6b46c1',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export const DoughnutChart = () => {
  const data = {
    labels: ['Subscribed', 'Not Subscribes'],
    datasets: [
      {
        label: 'Orders',
        data: [12, 11],
        borderColor: ['#3e0cab4d', '#d62b814d'],
        backgroundColor: ['#3e0cab4d', '#d62b814d'],
        borderWidth: '1',
      },
    ],
  };

  return <Doughnut data={data} />;
};

function getLastYearMonths() {
  const labels = []

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const currentMonth = new Date().getMonth();
//   const remain = 11 - currentMonth;

  for (let i = currentMonth; i < months.length; i--) {
      const element = months[i];
      labels.unshift(element);
      if (i === 0) break;
  }

  

  for (let i = 11; i >= currentMonth; i--) {
    if (i === currentMonth) break;
    const element = months[i];
    labels.unshift(element);
  }
  return labels;
}


