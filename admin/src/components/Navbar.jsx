import React from 'react'

const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between py-2 items-center px-[4%]'>
        <h1 className='text-2xl font-bold text-black'>Company Name</h1>
        <button onClick={()=> setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-base font-bold'>Logout</button>
    </div>
  )
}

export default Navbar