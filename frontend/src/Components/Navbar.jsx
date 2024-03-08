import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      <div className='flex items-center'>
        <Link to="/" className='text-2xl font-bold'>
            MyAPP
        </Link>
      </div>
      <div className='flex space-x-4'>
        <Link to="../Pages/page1" className='px-4 py-2 cursor-pointer hover:bg-gray-700'>Home</Link>
        <Link to="../Pages/page2" className='px-4 py-2 cursor-pointer hover:bg-gray-700'>About</Link>
        <Link to="../Pages/page3" className='px-4 py-2 cursor-pointer hover:bg-gray-700'>contact</Link>
      </div>
    </div>
  )
}

export default Navbar
