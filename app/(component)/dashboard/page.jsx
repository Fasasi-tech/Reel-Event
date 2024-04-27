import Tables from '@/app/ui/Table/Tables'
import BarChart from '@/app/ui/barchart/Barchart'

import Doughnuts from '@/app/ui/doughnut/Doughnuts'
import React from 'react'
import { PolarArea } from 'react-chartjs-2'


const page = () => {
  return (
    <div className='pt-32 flex flex-col sm:gap-0 md:gap-12 lg:gap-4 '>
        <div className='flex flex-wrap lg:flex-nowrap  gap-4 h-full md:h-[40vh] '>
            <div className='flex-auto flex flex-col justify-center items-center  bg-white dark:bg-black dark:border dark:border-slate-900 rounded-lg shadow-lg'>
                <BarChart />
            </div> 
            <div className='flex-auto flex flex-col justify-center items-center  bg-white dark:bg-black dark:border dark:border-slate-900 rounded-lg shadow-lg'>
                <Doughnuts />
            </div>
        </div>
        <div className='flex-auto w-full mt-4 bg-white rounded-lg shadow-lg h-[44vh] mb-4 overflow-y-auto overflow-x-auto dark:bg-black dark:border dark:border-slate-900'>
                <Tables />
                {/* <BarChart /> */}
         </div>
    </div>
  )
}

export default page