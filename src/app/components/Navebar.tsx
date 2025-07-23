import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './cartIcon'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Navebar() {
    const user = false
    return (
        <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500'>

            <div className='hidden md:flex gap-4'>
                <Link href='/'>Home Page
                </Link>
                <Link href='/Menu'>Menu
                </Link>
                <Link href='/Contact'>Contact
                </Link>

            </div>
            <div className='text-xl'>
                <Link href='/'>
                    Mohbe1993
                </Link>
            </div>

            <div className='md:hidden'>
                <Menu />
            </div>
            <div className='cursor-pointer bg-orange-300 p-1 rounded'>
                <PhoneAndroidIcon />
                <span>00123456789</span>
            </div>
            <div className='hidden md:flex gap-4'>
                {!user ? <Link href='/login'>Log in
                </Link> :
                    <Link href='/orders'>orders()
                    </Link>}
                <Link href='/cart'><CartIcon />
                </Link>

            </div>
        </div>
    )
}

export default Navebar