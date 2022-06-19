import React from 'react'
import './average-purchase.css'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
//   plugins: {
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart - Stacked',
//     },
//   },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
        label: 'Unit Per Transaction',
        data: [3, 4, 3, 5, 5, 5, 6],
        backgroundColor: '#707070',
    },
    {
        label: 'Average Purchase',
        data: [1, 2, 3, 5, 5, 5, 6],
        backgroundColor: '#7AE28C',
    },
    {
      label: 'Gross',
      data: [1, 2, 3, 5, 5, 5, 6],
      backgroundColor: '#289E45',
    },
    {
      label: 'Nett',
      data: [1, 2, 3, 5, 5, 5, 6],
      backgroundColor: '#37B04C',
    },
    
  ],
};

const AveragePurchaseValue = () => {
    return (
        <div className='average-purchase-container'>
            <div className='average-purchase-header'>
                <p>AVERAGE PURCHASE VALUE</p>
                <select name="cars" id="months">
                    <option value="3">Last 3 Months</option>
                    <option value="6">Last 6 Months</option>
                </select>
            </div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default AveragePurchaseValue