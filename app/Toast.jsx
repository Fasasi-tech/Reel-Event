
'use client'
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";







export const metadata = {
  title: 'Event App',
  description: '',
}

export default function ToastProvider({ children }) {



  return (
    // <StoreProvider>
 
                <div className="flex items-center justify-center">
                    {children}
                    <ToastContainer position="top-center" />
                </div>
          
    
  )
}
