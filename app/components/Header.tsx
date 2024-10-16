import React from 'react'

import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav className='bg-black h-16 flex justify-between items-center'>
        <h1 className='text-4xl font-bold mx-auto hidden md:block'>Beauty Care</h1>
        <div className='flex justify-end'>
          <ul className='flex text-lg space-x-5 md:space-x-10'>
            <li className='hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md'>
              <Link href="/">Home</Link>
            </li>
            <li className='hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md'>
              <Link href="/Product">Products</Link>
            </li>
            <li className='hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md'>
              <Link href="/Doctor">Doctor</Link>
            </li>
            <li className='hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md'>
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li className='hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md'>
              Blog
            </li>
          </ul>
          <div className='ml-5 md:ml-10'>
            <button className='bg-[#8f5d2b] h-8 w-20 rounded hover:bg-black duration-500'>
              Search
            </button>
            <input
              type="search"
              placeholder='search products Here'
              className='h-7 rounded border-2 border-black text-black w-60 ml-2'
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
