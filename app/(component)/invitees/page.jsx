import AdminRoute from '@/app/ui/AdminRoute'
import Tables from '@/app/ui/Table/Tables'
import React from 'react'
import dynamic from "next/dynamic";


const page = () => {
  return (
    
        <div className='pt-32 '>
            <AdminRoute>
          <div className='flex-auto w-full mt-4 bg-white rounded-lg shadow-lg  mb-4 overflow-y-auto overflow-x-auto dark:bg-black dark:border dark:border-slate-900'>
                  <Tables />
                  {/* <BarChart /> */}
          </div>
          </AdminRoute>
      </div>
   
  )
}

export default dynamic (() => Promise.resolve(page), {ssr: false})
