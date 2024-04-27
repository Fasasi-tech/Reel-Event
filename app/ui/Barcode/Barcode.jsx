'use client'
import React, {useEffect, useState} from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'


const Barcode = () => {
    const [scanResult, setScanResult] = useState(null)

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
        }
    
        function error(err){
            console.warn(err)
        }


    }, [])
   
  return (
    <div>
        <h1>Qr code</h1>
        {scanResult ? <div>success:{scanResult}</div>:
        <div id='reader' style={{ width: '200px', height: '200px' }}></div>}
    </div>
    

  )
}

export default Barcode