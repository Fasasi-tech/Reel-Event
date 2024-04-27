'use client'
import React from 'react';
import {Chart, RadialLinearScale, ArcElement, Title, Tooltip} from 'chart.js'
import { PolarArea } from 'react-chartjs-2';
Chart.register(RadialLinearScale, ArcElement, Title, Tooltip)

const data = {
  labels: ['Lagos', 'Oyo', 'Ogun', 'Yola', 'Blue',  'Lagos', 'Oyo', 'Ogun', 'Yola', 'Blue',] ,
  datasets: [
    {
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14, 11, 16, 7, 3, 14,],
      backgroundColor: [
        '#26501D',
        '#3D802E',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
      ],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    }
  },
};

const PolarAreaChart = () => {
  return (
    <div className=''>
        <div className="sm:w-72 sm:h-72  md:w-[26rem] md:h-[26rem]">
            <PolarArea data={data} options={options} />
        </div>
    </div>
  
  );
};

export default PolarAreaChart;
