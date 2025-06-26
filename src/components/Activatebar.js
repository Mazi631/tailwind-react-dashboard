import React from 'react'

const Activatebar = () => {
  return (
    <div className='bg-gradient-to-r from-[#f5f7fa] to-[#e9ecf6] p-8 flex justify-between items-end shadow-none border border-gray-200'>
        <div>
            <h1 className='text-2xl font-bold text-gray-900 mb-1'>
               Business Activation 
            </h1>
            <p className='text-sm font-medium text-gray-600 max-w-xl'>
             To complete your account verification, please provide the requested information
          and submit the necessary documents. Your account will be activated after our review.   
            </p>
        </div>

        <button className='bg-[#2A40F4] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#1f2fd4]'>
            Go To Dashboard
        </button>
    </div>
  )
}

export default Activatebar;