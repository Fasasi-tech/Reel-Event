'use client'
import React from 'react'
import {useSelector} from 'react-redux'
import { useRouter } from 'next/navigation';


const AdminRoute = ({children}) => {
    const router = useRouter();
    const {userInfo} = useSelector((state) =>state.auth)
  return (
    userInfo && (userInfo.data.user.role==='admin') ? children: router.push('/register')
  )
}

export default AdminRoute