import Register from '@/app/ui/register/Register'
import React from 'react'
import dynamic from "next/dynamic";


const page = () => {
  return (
    <div className='overflow-y-hidden'>
        <Register />
    </div>
  )
}

export default dynamic (() => Promise.resolve(page), {ssr: false})
