import React from 'react'
import {SiFsecure } from "react-icons/si";
import {AiFillChrome } from "react-icons/ai";
const Header = () => {
  return (
    <div className='header'>
    <nav className='py-2 md:py-4'>
      <div className='container px-4 mx-auto md:flex md:items-center'>
        <div className='flex justify-between items-center'>
          <a href="/" className='font-bold text-3xl text-white'>
            <h1 className='flex gap-3 items-center'>
              <SiFsecure size={50}/>NPD
            </h1>
          </a>
          <button className='md:hidden flex items-center text-white'>
            <svg className='fill-current h-6 w-6' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z' />
            </svg>
          </button>
        </div>
        <div className='hidden md:flex items-center md:flex-row md:ml-auto mt-3:mt-0'>
          <a href="/" className='p-2 lg:px-4 md:mx-2 text-white rounded'>Home</a>
          <a href="/blogs" className='p-2 lg:px-4 md:mx-2 text-white rounded'>Blogs</a>
          <a href="/aboutus" className='p-2 lg:px-4 md:mx-2 text-white rounded'>About</a>
          <a href="/contact" className='p-2 lg:px-4 md:mx-2 text-white rounded'>Contact us</a>
          <a href="/home" className='flex items-center gap-3 lg:md:mx-2 text-white rounded-tr-lg rounded-bl-lg px-10 py-2 bg-[#5CA0E9] font-bold'>
            <AiFillChrome size={30}/>Add to Chrome
          </a>
        </div>
        <div className='hidden md:hidden'>
          <div className='px-2 pt-2 pb-3 sm:px-3'>
            <a href="/home" className='block px-3 py-2 rounded text-base font-medium text-white bg-gray-900'>Home</a>
            <a href="/home" className='block px-3 py-2 rounded mt-1 text-base font-medium text-white hover:text-gray-400 hover:bg-gray-700'>Blogs</a>
            <a href="/home" className='block px-3 py-2 rounded mt-1 text-base font-medium text-white hover:text-gray-400 hover:bg-gray-700'>About</a>
            <a href="/home" className='block px-3 py-2 rounded mt-1 text-base font-medium text-white hover:text-gray-400 hover:bg-gray-700'>Contact us</a>
            <a href="/home" className='block px-3 py-2 rounded mt-1 text-base font-medium text-white bg-[#5CA0E9]'>Add to Chrome</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default Header