"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Income / Outcome Graph',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Income',
      data: [66,25,38,83,12,95,77],
      borderColor: 'rgba(99,132,77,1.0)',
      backgroundColor: 'rgba(99,132,77,0.5)',
    },
    {
      label: 'Outcome',
      data: [48,75,33,90,76,54,60],
      borderColor: 'rgba(213, 24, 58, 1)',
      backgroundColor: 'rgba(213, 24, 58, 0.5)',
    },
  ],
};