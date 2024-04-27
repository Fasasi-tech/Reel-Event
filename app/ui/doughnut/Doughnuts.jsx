'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,  } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: '',
        data: [10, 11],
        backgroundColor: ['#26501D', '#3D802E',],
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true,
        display: true,
        text: 'Sales Data', // Title text
        font: {
          size: 18,
        },
     },
      title: { display: false },
    },
  };
  

const Doughnuts = () => {
  return (
    <div className=''>
        <div className="w-72 h-72">
            <Doughnut data={data} options={options} />
        </div>
        
    </div>
  )
}

export default Doughnuts
