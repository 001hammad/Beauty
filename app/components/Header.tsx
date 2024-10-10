import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <nav className='bg-black h-16 flex justify-between items-center'>
            <div className='mr-56'>
                <Image src={Logo} alt='logo' className='w-12  ml-2'/>
            </div>
            <h1 className='text-4xl font-bold mr-140  '>Beauty Care</h1>
            <div>
                <ul className='float-right ml-auto flex text-lg space-x-16 pr-3 '>
                    <li className=' hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md '><Link href='/'>Home</Link></li>
                    <li className='hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md'><Link href='/Product'>Products</Link></li>
                    <li className='hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md'><Link href='/Doctor'>Doctor</Link></li>
                    <li className='hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md'><Link href='/AboutUs'>About Us</Link></li>
                    <li className='hover:bg-[#8f5d2b] hover:p-1 duration-500 rounded-md'>Blog</li>
                    
                </ul>
                <button className='bg-[#8f5d2b] mr-1 h-8 w-20 rounded hover:bg-black duration-500 '>Search</button>
                    <input type="search" placeholder='search products Here' className='h-7 mr-20 rounded border-2 border-black text-black w-60' />
            </div>
        </nav>
    </header>
  )
}

export default Header
