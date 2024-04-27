'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import Login from '../../log/Login'
import ToggleMode from '../../ToggleMode'
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";




const Navbars = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className={`w-full  lg:px-8 relative `}>
        <div className='mt-4 px-0'  >
            <div className='bg-white dark:bg-black  border dark:border-slate-900 p-4 rounded-md flex items-center justify-between align-center'>
                <div className='flex w-full items-center justify-between gap-4'>
                    <div>
                        <h3 className='font-serif  text-[#83ed6b] text-2xl font-black'>Reel Event</h3>
                    </div>
                    <div className='text-[#83ed6b] md:hidden '><ToggleMode /></div>
                    <div onClick={() =>setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden text-[#83ed6b]'>
                        {open ? <MdCancel /> : < FaBars/>}
                    </div>
                    {/* <div className='md:hidden'>
                        <HiMiniBars3BottomRight onClick={() => setOpen(!open)} className='text-3xl cursor-pointer' />
                    </div> */}

                    <div className='md:flex md:gap-4 md:items-center font-bold sm:hidden '>
                        {/* <div className='flex gap-4 items-center font-bold sm:hidden md:flex'> */}
                        <div><Link href='/dashboard' className='text-[#83ed6b]  hidden sm:block'>Dashboard</Link></div>
                        <div><Link href='/register' className='text-[#83ed6b]  hidden sm:block' >Register</Link></div>
                        <div className='text-[#83ed6b]  hidden sm:block'><Login /></div>
                        <div className='text-[#83ed6b]  hidden sm:block'><ToggleMode /></div>
                        {/* </div> */}
                    </div>

                    {
                        open &&(
                            <div className='md:flex md:gap-4 md:items-center font-bold sm:hidden absolute top-24 right-4 bg-white p-4'>
                            {/* <div className='flex gap-4 items-center font-bold sm:hidden md:flex'> */}
                            <div className='pt-4'><Link href='/dashboard' className='text-[#83ed6b] '>Dashboard</Link></div>
                            <div className='pt-4'><Link href='/register' className='text-[#83ed6b] ' >Register</Link></div>
                            <div className='text-[#83ed6b] pt-4'><Login /></div>
                            
                            {/* </div> */}
                        </div>)
                    }   
                </div>
               
            </div>      
        </div>
    </div>
    
  )
}

export default Navbars