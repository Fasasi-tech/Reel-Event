// import Barcode from '@/app/ui/Barcode/Barcode'

import Barcode from '@/app/ui/Barcode/Barcode'
import QrReader from '@/app/ui/Barcode/Code'
import Codes from '@/app/ui/Barcode/Code'


import React from 'react'

const page = () => {
  return (
    <div className='mt-24 flex items-center justify-center '>
     {/* <Barcode /> */}
    <QrReader />
    </div>
  )
}

export default page