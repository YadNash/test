import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, PointElement);

const ChartComponent = ({ type, data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  switch (type) {
    case 'doughnut':
      return <Doughnut data={chartData} />;
    case 'bar':
      return <Bar data={chartData} />;
    case 'line':
      return <Line data={chartData} />;
    default:
      return null;
  }
};

export default ChartComponent;