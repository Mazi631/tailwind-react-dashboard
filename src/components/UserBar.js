import React from 'react'
import { FaBell, FaUserCircle, FaChevronDown } from 'react-icons/fa';

const UserBar = () => {
  return (
    <div className='relative z-100 flex justify-end items-center gap-4 p-4 bg-white shadow-sm border-2 -mb-4'>
        <button className='p-2 bg-[#eaedf9] rounded-lg text-[#2A40F4] hover:bg-[#e0e5ff] transition-colors'>
          <FaBell />
        </button>
        <button className='p-2 bg-[#eaedf9] rounded-lg text-[#2A40F4] hover:bg-[#e0e7ff] transition-colors'>
            <FaUserCircle />
        </button>
        <div className='flex items-center gap-1 text-sm font-bold text-gray-600 font-sans'>
            Ogugua Opara <FaChevronDown className='text-gray-500' />
        </div>
    </div>
  )
}

export default UserBar