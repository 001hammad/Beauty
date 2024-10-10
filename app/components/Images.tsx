import React from 'react'
import Image from 'next/image'
import Mainpic from '../../../public/mainpic.png'

const Images = () => {
  return (
    
        <div className='flex justify-center items-center pt-7'>
       <Image src={Mainpic} alt='mainpic'  className='w-96'/>
        </div>
    
  )
}

export default Images
