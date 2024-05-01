import { ThreeDots } from "react-loader-spinner";

import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center text-[#83ed6b]">
        <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#83ed6b"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
    
  )
}

export default Loader