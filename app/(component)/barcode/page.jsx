// import Barcode from '@/app/ui/Barcode/Barcode'

import AdminRoute from '@/app/ui/AdminRoute'
import Barcode from '@/app/ui/Barcode/Barcode'
import dynamic from "next/dynamic";


import React from 'react'

const page = () => {
  return (
    
      <div className='mt-24 flex items-center justify-center '>
      <AdminRoute>
      <Barcode />
      {/* <QrReader /> */}
      </AdminRoute>
      </div>
   
  )
}
export default dynamic (() => Promise.resolve(page), {ssr: false})