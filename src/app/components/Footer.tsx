import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='h-fit  p-4   text-red-500 flex  items-center justify-around'>
            <Link href='/' className='font-bold text-xl'>Mohbe1993</Link>
            <p className='text-center text-nowrap'>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default Footer