'use client'
import React from 'react'
import Image from 'next/image';
import { useGetSingleUserQuery } from '../slices/usersApiSlice'

const SingleUser = ({params}) => {
    const {id} = params;
    const {data, isLoading, error} = useGetSingleUserQuery(id)
    if (isLoading){
        return <Loader />
      }
    
      if (error){
        return <p>something went wrong!</p>
    }  

    const {user} = data.data;
  return ( 
    <div>
       {user ? ( 
       <div><p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>Gender:{user.gender}</p>
        <p>Email:{user.email}</p>
        <p>Phone:{user.phone}</p>
        <p>state:{user.state}</p>
        <Image src={user.photo} alt='photo' />
        </div>
        ):(
            <p>No data found!</p>
        )
  }
    </div>
  )
}

export default SingleUser