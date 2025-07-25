import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

function Offer() {
  return (
    <div className=' bg-black h-screen flex flex-col md:flex-row ' >
      <div className='flex-1 text-white flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-5xl font-bold xl:text-6xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, id.</h1>
        <p className=' xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sapiente, rem reprehenderit dolor facilis enim deserunt minus ut dignissimos laborum.</p>
        <CountDown />
        <button className='bg-red-500 text-white rounded-md py-3 px-6'>
          Order Now
        </button>
      </div>
      <div className='relative flex-1 w-full'>
        <Image src="/offerProduct.png" alt="" fill loading='lazy' className='object-contain' />
      </div>
    </div>
  )
}

export default Offer