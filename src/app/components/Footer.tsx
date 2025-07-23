import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
            <Link href='/' className='font-bold text-xl'>Mohbe1993</Link>
            <p >Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    )
}

export default Footer