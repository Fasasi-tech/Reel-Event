
'use client'
import React from 'react'
import Link from 'next/link';
import { useGetSingleUserQuery } from '@/app/ui/slices/usersApiSlice';
import Loader from '@/app/ui/Loader';
import { FaArrowAltCircleLeft } from "react-icons/fa";


const page = ({params}) => {

    const {id} = params;
    const {data, isLoading, error} = useGetSingleUserQuery(id)
    if (isLoading){
        return <Loader />
      }
    
      if (error){
        return <p>something went wrong!</p>
    }  

    const {user} = data.data;
    const formattedDate = user.createdAt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return ( 
    <div className='mt-24'>
        <div className='flex justify-start py-2'>
            <Link className='text-[#83ed6b] text-2xl  rounded-lg p-2' href='/barcode'><FaArrowAltCircleLeft /></Link>
        </div>
       {user ? ( 
       <div className='bg-white dark:bg-black py-8 px-4 rounded-lg shadow-lg'>
        <p className='text-lg font-serif text-[#83ed6b]'>Invitee Found!</p>
        <p className='text-lg font-serif'><span className='text-[#83ed6b]'>First Name: </span>{user.first_name}</p>
        <p className='text-lg font-serif'><span className='text-[#83ed6b]'>Last Name: </span> {user.last_name}</p>
        <p className='text-lg font-serif'><span className='text-[#83ed6b]'>Gender: </span>{user.gender}</p>
        <p className='text-lg font-serif'><span className='text-[#83ed6b]'>Email: </span>{user.email}</p>
        <p className='text-lg font-serif'><span className='text-[#83ed6b]'> Phone: </span>{user.phone_number}</p>
        <p className='text-lg font-serif'><span className='text-[#83ed6b]'>State: </span>{user.state}</p>
        <p className='text-lg font-serif'><span className='text-[#83ed6b]'>Date Registered: </span>{user.formattedDate} </p>
      </div>
        ):(
            <p>Invitee not found!</p>
        )
  }
    </div>
  )
}

export default page