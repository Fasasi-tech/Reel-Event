'use client'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Login from '../../log/Login'
import ToggleMode from '../../ToggleMode'
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {  useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from '../../slices/usersApiSlice'
import { logout } from '../../slices/authSlice'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
//  import HydrationTest from '@/app/hydrationTest'
//  const HydrationTestNoSSR = dynamic(()=>import("@/app/hydrationTest"), {ssr: false})



const Navbars = () => {

    const [open, setOpen] = useState(false)
   
    const router = useRouter()
    
    
    

    const {userInfo} = useSelector((state) =>state.auth)
    const dispatch = useDispatch();
    const [logoutApiCall] = useLogoutMutation()
    const logoutHandler = async () => {
        try {
          await logoutApiCall().unwrap();
          dispatch(logout());
         router('/dashboard');
        } catch (err) {
          console.error(err);
        }
      };


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
                        {open ? <FaBars /> : < FaBars/>}
                    </div>
                    {/* <div className='md:hidden'>
                        <HiMiniBars3BottomRight onClick={() => setOpen(!open)} className='text-3xl cursor-pointer' />
                    </div> */}

                    <div className='md:flex md:gap-4 md:items-center font-bold sm:hidden '>
                        {/* <HydrationTestNoSSR/> */}
                     {/* <div suppressHydrationWarning>{a}</div> */}
                        {/* <div className='flex gap-4 items-center font-bold sm:hidden md:flex'> */}
                        {  userInfo ? (
                            <>
                            { <p className={`bg-[#83ed6b] p-2 rounded-lg text-white ${userInfo && 'hidden sm:block' }`}>{userInfo.data.user.first_name}</p>}
                            <div><Link href='/dashboard' className='text-[#83ed6b] hover:text-[#c2d2bf]  hidden sm:block'>Dashboard</Link></div>
                            <div><Link href='/register' className='text-[#83ed6b] hover:text-[#c2d2bf]  hidden sm:block' >Register</Link></div>
                            <div><Link href='/barcode' className='text-[#83ed6b] hover:text-[#c2d2bf]  hidden sm:block' >Barcode</Link></div>
                             <div className='text-[#83ed6b] hover:text-[#a3de96]  hidden sm:block cursor-pointer' onClick={logoutHandler}>Logout</div>
                             <div className='text-[#83ed6b] hover:text-[#a3de96]   hidden sm:block'><ToggleMode /></div>
                        </>
                        ):(
                            <>
                           
                            {/* <div><Link href='/dashboard' className='text-[#83ed6b]  hidden sm:block'>Dashboard</Link></div> */}
                        <div><Link href='/register' className='text-[#83ed6b]  hidden sm:block' >Register</Link></div>
                        <div className='text-[#83ed6b]  hidden sm:block'><Login /></div>
                        <div className='text-[#83ed6b]  hidden sm:block'><ToggleMode /></div>
                            </>
                        )}
                        
                      
                    </div>

                    {
                        open &&(
                            <div className='md:flex md:gap-4 md:items-center font-bold sm:hidden absolute top-24 right-4 bg-white dark:bg-black p-4'>
                            {/* <div className='flex gap-4 items-center font-bold sm:hidden md:flex'> */}
                        {userInfo && <div className='pt-4'><Link href='/dashboard' className='text-[#83ed6b] '>Dashboard</Link></div>}
                            <div className='pt-4'><Link href='/register' className='text-[#83ed6b] ' >Register</Link></div>
                           {userInfo &&  <div className='pt-4'><Link href='/barcode' className='text-[#83ed6b]' >Barcode</Link></div>}
                            <div className=' pt-4'>{!userInfo && <Login />}</div>
                            <div className=''>{userInfo && <button className='text-[#83ed6b] cursor-pointer' onClick={logoutHandler}>Logout</button>}</div>
                            <div className='pt-4'>{userInfo && <button className='bg-[#83ed6b] text-white p-2 rounded-lg cursor-pointer' >{userInfo.data.user.first_name}</button>}</div>
                            
                            {/* </div> */}
                        </div>)
                    }   
                </div>
               
            </div>      
        </div>
    </div>
    
  )
}

export default dynamic (() => Promise.resolve(Navbars), {ssr: false})
