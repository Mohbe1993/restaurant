import Link from 'next/link'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartIcon() {
    return (
        <div className='flex items-center gap-0.5 md:gap-0'>

            <div className='relative w-8 h-8'>

                <ShoppingCartIcon className='text-yellow-600' />


            </div>
            <span >Cart()</span>
        </div>

    )
}

export default CartIcon