
'use client'

import React, { useState } from 'react'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import RestaurantMenuSharpIcon from '@mui/icons-material/RestaurantMenuSharp';
import Link from 'next/link';
import CartIcon from './cartIcon';

const links = [
    { id: 1, title: 'Home Page', url: '/' },
    { id: 2, title: 'Menu', url: '/Menu' },
    { id: 3, title: 'Working Hours', url: '/' },
    { id: 4, title: 'Contact', url: '/' }
]

function Menu() {
    const [open, setOpen] = useState(false)
    const user = false
    return (
        <div className='cursor-pointer'>
            {!open ? <RestaurantMenuSharpIcon onClick={() => setOpen(true)} /> :
                <CloseSharpIcon onClick={() => setOpen(false)} />}

            {open && <div className='bg-red-500 text-white absolute left-0 top-30 md:top-24 flex gap-8 flex-col items-center justify-center w-full z-10 h-[calc(100vh-6rem)] text-3xl cul'>
                {links.map(item => <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                    {item.title}
                </Link>)

                }
                {!user ? <Link href='/login' onClick={() => setOpen(false)}>Log in</Link> :
                    <Link href='/orders' onClick={() => setOpen(false)}>Orders</Link>}

                <Link href='/cart' onClick={() => setOpen(false)}>
                    <CartIcon /></Link>

            </div>}
        </div>
    )
}

export default Menu