import React from 'react'

const Payment = () => {


  return (
       <div className='bg-gradient-to-r from-[#f5f7fa] to-[#e9ecf6] p-8 flex justify-between items-end shadow-none border border-gray-200'>
        <div>
            <h1 className='text-2xl font-bold text-gray-900 mb-1'>
               Payment Link 
            </h1>
            <p className='text-sm font-medium text-gray-600 max-w-xl'>
               Create payment link to receive payments seamlessly
            </p>
        </div>

        <button className='bg-[#2A40F4] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#1f2fd4]'>
            Generate Link
        </button>
    </div>
  )
}

export default Payment