import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)

    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1100px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[green]'>REACT.</h1>
        <ul className='hidden'>
             <li className='p-4'>Home</li>
             <li className='p-4'>Company</li> 
             <li className='p-4'>Resources</li>
             <li className='p-4'>About</li>
             <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav}>
            {!nav ? <AiOutlineMenu onClick={handleNav} size={20} /> : <AiOutlineClose onClick={handleNav} size={20} />}
        </div>
        <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[25%]  border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
            <h1 className='w-0 text-3xl font-bold text-[green] m-3'>REACT.</h1>

            <ul className='uppercase p-3'>
             <li className='p-4 border-b border-gray-600'>Home</li>
             <li className='p-4 border-b border-gray-600'>Company</li> 
             <li className='p-4 border-b border-gray-600'>Resources</li>
             <li className='p-4 border-b border-gray-600'>About</li>
             <li className='p-4'>Contact</li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar