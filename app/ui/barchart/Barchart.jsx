'use client'
import React from 'react';
import {Chart, RadialLinearScale, ArcElement, Title, Tooltip} from 'chart.js'
import { PolarArea } from 'react-chartjs-2';
Chart.register(RadialLinearScale, ArcElement, Title, Tooltip)
import { useStateStatsQuery } from '../slices/usersApiSlice';
import Loader from '../Loader';



const PolarAreaChart = () => {
  const {data:state, isLoading, error} = useStateStatsQuery()

  if (isLoading){
    return <Loader />
  }

  if (error){
    return <p>something went wrong!</p>
}

//console.log(state.data.user[0])
const stateData =state.data.user.map((stat) => ({
  id:stat._id,
  count:stat.count
}))

const labels = stateData.map((data) => data.id)
const counts= stateData.map((data) => data.count)
  const data = {

    labels: labels ,
    datasets: [
      {
        label: '',
        data: counts,
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
  return (
    <div className=''>
        <div className="sm:w-72 sm:h-72  md:w-[26rem] md:h-[26rem]">
            <PolarArea data={data} options={options} />
        </div>
    </div>
  
  );
};

export default PolarAreaChart;
