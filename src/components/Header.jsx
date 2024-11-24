import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Header() {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 py-28 px-20'>
        <button className='bg-black border-4 text-xl  px-8 py-3 hover:bg-gray-500 rounded-full'>Hire me</button>
        <i className="ri-more-2-fill text-4xl ml-3"></i>
    </div>
  )
}

export default Header