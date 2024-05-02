'use client'
import React, {useEffect, useState} from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useRouter } from 'next/navigation'


const Barcode = () => {
    const [scanResult, setScanResult] = useState(null)
    const router = useRouter()

    useEffect(() =>{
        const scanner =new Html5QrcodeScanner('reader', {
            qrbox:{
                width:250,
                height:250,
            },
            fps:5
        })
        scanner.render(success, error )
    
        function success(result){ 
            scanner.clear()
            setScanResult(result)

            const parts = result.split(',');

            let id = null;
            parts.forEach(part => {
                const [key, value]=part.split(':')
                if(key.trim() ==='id'){
                    id= value.trim()
                }
            })
            console.log(id)
           if (id){
            router.push(`/user-details/${id}/bcode`)
           }
            
        }
    
        function error(err){
            console.warn(err)
        }


    }, [])
   
  return (
    <div>
        
        {scanResult ? <div>{scanResult}</div>:
        <div id='reader' style={{ width: '200px', height: '200px' }}></div>}
    </div>
    

  )
}

export default Barcode