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

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];



const AveragePurchaseValue = ({ datasets }) => {
    const data = {
        labels,
        datasets: datasets || [],
    };

    return (
        <div className='average-purchase-container'>
            <div className='average-purchase-header'>
                <p>AVERAGE PURCHASE VALUE</p>
                <select name="cars" id="months">
                    <option value="3">Last 3 Months</option>
                    <option value="6">Last 6 Months</option>
                </select>
            </div>
            <div className='bar-container'>
                <Bar options={options} data={data} />

            </div>
        </div>
    )
}

export default AveragePurchaseValue