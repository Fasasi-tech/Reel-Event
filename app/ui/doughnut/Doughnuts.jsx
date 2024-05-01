'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,  } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { useGenderStatsQuery } from '../slices/usersApiSlice';
import Loader from '../Loader';


  

const Doughnuts = () => {
  const {data:state, isLoading, error} = useGenderStatsQuery()
  if (isLoading){
    return <Loader />
  }

  if (error){
    return <p>something went wrong!</p>
}  if (isLoading){
    return <p>Loading</p>
  }

  if (error){
    return <p>something went wrong!</p>
}
const stateData =state.data.user.map((stat) => ({
  id:stat._id,
  count:stat.count
}))

const labels = stateData.map((data) => data.id)
const counts= stateData.map((data) => data.count)

  const data = {
    labels,
    datasets: [
      {
        label: 'Gender',
        data:counts,
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
  return (
    <div className=''>
        <div className="w-72 h-72">
            <Doughnut data={data} options={options} />
        </div>
        
    </div>
  )
}

export default Doughnuts
